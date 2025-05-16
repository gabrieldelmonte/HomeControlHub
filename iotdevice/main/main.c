#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <string.h>
#include "esp_wifi.h"
#include "esp_system.h"
#include "nvs_flash.h"
#include "esp_event.h"
#include "esp_netif.h"
#include "protocol_examples_common.h"

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/semphr.h"
#include "freertos/queue.h"

#include "lwip/sockets.h"
#include "lwip/dns.h"
#include "lwip/netdb.h"

#include "esp_log.h"
#include "mqtt_client.h"

#include "hal/led_control.h"
#include "hal/network_mqtt_handler.h"

#define WIFI_SSID       "WIFI_SSID"             // Replace with Wi-Fi SSID
#define WIFI_PASS       "WIFI_PASSWORD"         // Replace with Wi-Fi Password
#define MQTT_BROKER_URL "mqtt://MQTT_BROKER_IP" // Replace with MQTT Broker URL (e.g., mqtt://192.168.1.100)
#define MQTT_DEVICE_ID  "esp32_dev_01"          // Replace with desired device ID
#define LED_GPIO_PIN    GPIO_NUM_15

#define APP_MAIN_TAG    "APP_MAIN"

static gpio_num_t app_led_gpio_pin = LED_GPIO_PIN;

static void log_error_if_nonzero(const char *message, int error_code)
{
    if (error_code != 0) {
        ESP_LOGE(APP_MAIN_TAG, "Last error %s: 0x%x", message, error_code);
    }
}

/*
 * @brief Event handler registered to receive MQTT events
 *
 *  This function is called by the MQTT client event loop.
 */
static void mqtt_event_handler(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data)
{
    ESP_LOGD(APP_MAIN_TAG, "Event dispatched from event loop base=%s, event_id=%lu", base, event_id);
    esp_mqtt_event_handle_t event = event_data;
    esp_mqtt_client_handle_t client = event->client;
    int msg_id;
    switch ((esp_mqtt_event_id_t)event_id) {
    case MQTT_EVENT_CONNECTED:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_CONNECTED");
        snprintf(led_command_topic, sizeof(led_command_topic), "home/devices/%s/command/setLed", MQTT_DEVICE_ID);
        msg_id = esp_mqtt_client_subscribe(client, led_command_topic, 0);
        ESP_LOGI(APP_MAIN_TAG, "sent subscribe successful, msg_id=%d, topic=%s", msg_id, led_command_topic);
        break;
    case MQTT_EVENT_DISCONNECTED:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_DISCONNECTED");
        break;
    case MQTT_EVENT_SUBSCRIBED:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_SUBSCRIBED, msg_id=%d", event->msg_id);
        // Example: publish a message after subscribing
        // msg_id = esp_mqtt_client_publish(client, "/topic/qos0", "data", 0, 0, 0);
        // ESP_LOGI(TAG, "sent publish successful, msg_id=%d", msg_id);
        break;
    case MQTT_EVENT_UNSUBSCRIBED:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_UNSUBSCRIBED, msg_id=%d", event->msg_id);
        break;
    case MQTT_EVENT_PUBLISHED:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_PUBLISHED, msg_id=%d", event->msg_id);
        break;
    case MQTT_EVENT_DATA:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_DATA");
        printf("TOPIC=%.*s\r\n", event->topic_len, event->topic);
        printf("DATA=%.*s\r\n", event->data_len, event->data);
        if (strncmp(event->topic, led_command_topic, event->topic_len) == 0) {
            ESP_LOGI(APP_MAIN_TAG, "Received command for LED");
            // For simplicity, expecting "true" or "false" as string payload
            // A more robust solution would parse JSON, e.g., {"state": true}
            if (strncmp(event->data, "true", event->data_len) == 0) {
                led_set_state(app_led_gpio_pin, true);
                ESP_LOGI(APP_MAIN_TAG, "LED turned ON");
            } else if (strncmp(event->data, "false", event->data_len) == 0) {
                led_set_state(app_led_gpio_pin, false);
                ESP_LOGI(APP_MAIN_TAG, "LED turned OFF");
            } else {
                ESP_LOGW(APP_MAIN_TAG, "Unknown LED command payload: %.*s", event->data_len, event->data);
            }
        }
        break;
    case MQTT_EVENT_ERROR:
        ESP_LOGI(APP_MAIN_TAG, "MQTT_EVENT_ERROR");
        if (event->error_handle->error_type == MQTT_ERROR_TYPE_TCP_TRANSPORT) {
            log_error_if_nonzero("reported from esp-tls", event->error_handle->esp_tls_last_esp_error);
            log_error_if_nonzero("reported from tls stack", event->error_handle->esp_tls_stack_error);
            log_error_if_nonzero("captured as transport's socket errno", event->error_handle->esp_transport_sock_errno);
            ESP_LOGI(APP_MAIN_TAG, "Last errno string (%s)", strerror(event->error_handle->esp_transport_sock_errno));
        }
        break;
    default:
        ESP_LOGI(APP_MAIN_TAG, "Other event id:%d", event->event_id);
        break;
    }
}

static void mqtt_app_start(void)
{
    esp_mqtt_client_config_t mqtt_cfg = {
        // .broker.address.uri = MQTT_BROKER_URL, // For ESP-IDF v5.x
        .uri = MQTT_BROKER_URL, // For ESP-IDF v4.x
    };
    client = esp_mqtt_client_init(&mqtt_cfg);
    /* The last argument may be used to pass data to the event handler, in this example mqtt_event_handler */
    esp_mqtt_client_register_event(client, ESP_EVENT_ANY_ID, mqtt_event_handler, NULL);
    esp_mqtt_client_start(client);
}

static void main_wifi_event_handler(void* arg, esp_event_base_t event_base,
                                   int32_t event_id, void* event_data)
{
    if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        ip_event_got_ip_t* event = (ip_event_got_ip_t*) event_data;
        ESP_LOGI(APP_MAIN_TAG, "Got IP address: " IPSTR, IP2STR(&event->ip_info.ip));
        ESP_LOGI(APP_MAIN_TAG, "Starting MQTT application...");
        network_mqtt_app_start(); // Initialize and start the MQTT client
        
        esp_mqtt_client_handle_t client = network_get_mqtt_client_handle();
        if (client) {
            // Register the MQTT event handler from the network module, passing the LED pin as context
            ESP_ERROR_CHECK(esp_mqtt_client_register_event(client, ESP_EVENT_ANY_ID, network_mqtt_event_handler_cb, &app_led_gpio_pin));
            ESP_LOGI(APP_MAIN_TAG, "MQTT event handler registered with LED pin %d", app_led_gpio_pin);
        } else {
            ESP_LOGE(APP_MAIN_TAG, "Failed to get MQTT client handle to register event handler.");
        }
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        ESP_LOGI(APP_MAIN_TAG, "Wi-Fi disconnected in main handler, network_wifi_init_sta handles reconnection.");
        // Reconnection logic is within network_wifi_init_sta's internal handler
    }
}

void app_main(void)
{
    ESP_LOGI(APP_MAIN_TAG, "[APP] Startup..");
    ESP_LOGI(APP_MAIN_TAG, "[APP] Free memory: %lu bytes", esp_get_free_heap_size());
    ESP_LOGI(APP_MAIN_TAG, "[APP] IDF version: %s", esp_get_idf_version());

    esp_log_level_set("*", ESP_LOG_INFO);
    esp_log_level_set("mqtt_client", ESP_LOG_VERBOSE);
    esp_log_level_set("MQTT_EXAMPLE", ESP_LOG_VERBOSE);
    esp_log_level_set("NETWORK_MQTT", ESP_LOG_VERBOSE);
    esp_log_level_set(APP_MAIN_TAG, ESP_LOG_VERBOSE);

    //Initialize NVS
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
      ESP_ERROR_CHECK(nvs_flash_erase());
      ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);

    // Initialize LED
    led_init(app_led_gpio_pin);
    led_set_state(app_led_gpio_pin, false); // Start with LED off
    ESP_LOGI(APP_MAIN_TAG, "LED Initialized on GPIO %d", app_led_gpio_pin);

    ESP_LOGI(APP_MAIN_TAG, "Initializing Wi-Fi...");
    // Before calling network_wifi_init_sta, register main's IP event handler
    // This is to ensure main can trigger MQTT start *after* IP is obtained.
    // The network_wifi_init_sta will set up its own internal handlers for basic Wi-Fi events (connect, disconnect).
    // We need a default event loop first.
    ESP_ERROR_CHECK(esp_event_loop_create_default()); // Ensure default loop exists, network_wifi_init_sta might also do this.
    // It's safer if network_wifi_init_sta ensures the default loop, and main registers its specific handlers after.
    // For now, let's assume network_wifi_init_sta handles the creation of the default event loop if not present.

    // Register our IP event handler to start MQTT
    ESP_ERROR_CHECK(esp_event_handler_instance_register(IP_EVENT, IP_EVENT_STA_GOT_IP, &main_wifi_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register(WIFI_EVENT, WIFI_EVENT_STA_DISCONNECTED, &main_wifi_event_handler, NULL, NULL));

    network_wifi_init_sta(); // This will connect to Wi-Fi
    // MQTT start and event handler registration will occur in main_wifi_event_handler upon getting an IP.
}
