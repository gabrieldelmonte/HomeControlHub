#include "network_mqtt_handler.h"
#include "led_control.h" // For LED_GPIO_PIN and led_set_state

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <string.h>
#include "esp_wifi.h"
#include "esp_system.h"
#include "esp_event.h"
#include "esp_netif.h"
// #include "protocol_examples_common.h" // Not strictly needed here if main handles NVS

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/semphr.h"
#include "freertos/queue.h"

#include "lwip/sockets.h"
#include "lwip/dns.h"
#include "lwip/netdb.h"

#include "esp_log.h"

// Definitions moved from main.c
#define WIFI_SSID       CONFIG_ESP_WIFI_SSID      // Using Kconfig via sdkconfig
#define WIFI_PASS       CONFIG_ESP_WIFI_PASSWORD  // Using Kconfig via sdkconfig
#define MQTT_BROKER_URL CONFIG_ESP_MQTT_BROKER    // Using Kconfig via sdkconfig
#define MQTT_DEVICE_ID  "esp32_led_controller_01" // Example Device ID

// GPIO for LED is better defined in main.c or passed to functions, 
// but for this example, we will use the one from main.c via led_control.h if needed by handler.
// For now, we assume main.c passes the correct GPIO to led_set_state.
// #define LED_GPIO_PIN    GPIO_NUM_15 // This should be managed by the main application logic

static const char *TAG_NET = "NETWORK_MQTT";
static esp_mqtt_client_handle_t client_handle;
static char current_led_command_topic[100];

// Forward declaration for wifi_event_handler
static void wifi_event_handler_internal(void* arg, esp_event_base_t event_base,
                                int32_t event_id, void* event_data);

static void log_error_if_nonzero(const char *message, int error_code)
{
    if (error_code != 0) {
        ESP_LOGE(TAG_NET, "Last error %s: 0x%x", message, error_code);
    }
}

const char* network_get_led_command_topic(char *buffer, size_t buffer_size) {
    if (strlen(current_led_command_topic) > 0) {
        strncpy(buffer, current_led_command_topic, buffer_size -1);
        buffer[buffer_size - 1] = '\0'; // Ensure null termination
        return buffer;
    }
    return NULL;
}

void network_mqtt_event_handler_cb(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data)
{
    ESP_LOGD(TAG_NET, "Event dispatched from event loop base=%s, event_id=%lu", base, event_id);
    esp_mqtt_event_handle_t event = event_data;
    esp_mqtt_client_handle_t local_client = event->client;
    int msg_id;

    // GPIO pin should be passed or globally accessible if this handler directly controls hardware
    // For this refactoring, we assume the main application or a specific LED module handles the GPIO action.
    // extern const gpio_num_t LED_GPIO_PIN; // Example if it were global in main

    switch ((esp_mqtt_event_id_t)event_id) {
    case MQTT_EVENT_CONNECTED:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_CONNECTED");
        snprintf(current_led_command_topic, sizeof(current_led_command_topic), "home/devices/%s/command/setLed", MQTT_DEVICE_ID);
        msg_id = esp_mqtt_client_subscribe(local_client, current_led_command_topic, 0);
        ESP_LOGI(TAG_NET, "sent subscribe successful, msg_id=%d, topic=%s", msg_id, current_led_command_topic);
        break;
    case MQTT_EVENT_DISCONNECTED:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_DISCONNECTED");
        break;
    case MQTT_EVENT_SUBSCRIBED:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_SUBSCRIBED, msg_id=%d", event->msg_id);
        break;
    case MQTT_EVENT_UNSUBSCRIBED:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_UNSUBSCRIBED, msg_id=%d", event->msg_id);
        break;
    case MQTT_EVENT_PUBLISHED:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_PUBLISHED, msg_id=%d", event->msg_id);
        break;
    case MQTT_EVENT_DATA:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_DATA");
        printf("TOPIC=%.*s\r\n", event->topic_len, event->topic);
        printf("DATA=%.*s\r\n", event->data_len, event->data);
        if (strncmp(event->topic, current_led_command_topic, event->topic_len) == 0) {
            ESP_LOGI(TAG_NET, "Received command for LED via network handler");
            // Decision: This handler *could* call led_set_state directly if it knew the GPIO.
            // Or, it could raise an application-specific event, or call a callback.
            // For now, let's assume main.c will retrieve the topic and data if needed, 
            // or that a more specific handler is registered for this topic.
            // This callback is generic for all MQTT data. If direct action is needed here:
            // led_set_state(SOME_LED_GPIO_PIN, (strncmp(event->data, "true", event->data_len) == 0));
            // This example keeps the LED control in main.c for clarity of this refactor step.
            // The original main.c's MQTT handler did this directly. We'll adjust main.c to use this callback.
            if (handler_args) {
                gpio_num_t led_pin = *(gpio_num_t*)handler_args;
                 if (strncmp(event->data, "true", event->data_len) == 0) {
                    led_set_state(led_pin, true);
                    ESP_LOGI(TAG_NET, "LED turned ON by network_mqtt_event_handler_cb");
                } else if (strncmp(event->data, "false", event->data_len) == 0) {
                    led_set_state(led_pin, false);
                    ESP_LOGI(TAG_NET, "LED turned OFF by network_mqtt_event_handler_cb");
                } else {
                    ESP_LOGW(TAG_NET, "Unknown LED command payload in network_mqtt_event_handler_cb: %.*s", event->data_len, event->data);
                }
            }
        }
        break;
    case MQTT_EVENT_ERROR:
        ESP_LOGI(TAG_NET, "MQTT_EVENT_ERROR");
        if (event->error_handle->error_type == MQTT_ERROR_TYPE_TCP_TRANSPORT) {
            log_error_if_nonzero("reported from esp-tls", event->error_handle->esp_tls_last_esp_error);
            log_error_if_nonzero("reported from tls stack", event->error_handle->esp_tls_stack_error);
            log_error_if_nonzero("captured as transport's socket errno", event->error_handle->esp_transport_sock_errno);
            ESP_LOGI(TAG_NET, "Last errno string (%s)", strerror(event->error_handle->esp_transport_sock_errno));
        }
        break;
    default:
        ESP_LOGI(TAG_NET, "Other event id:%d", event->event_id);
        break;
    }
}

void network_mqtt_app_start(void)
{
    esp_mqtt_client_config_t mqtt_cfg = {
        // .broker.address.uri = MQTT_BROKER_URL, // For ESP-IDF v5.x and later
        .uri = MQTT_BROKER_URL, // For ESP-IDF v4.x. Ensure your IDF version matches.
    };
    client_handle = esp_mqtt_client_init(&mqtt_cfg);
    // Pass LED_GPIO_PIN as handler_args. This requires LED_GPIO_PIN to be known here or passed to network_mqtt_app_start.
    // For now, we will modify main.c to pass its LED_GPIO_PIN.
    // The typecast (void*)&LED_GPIO_PIN assumes LED_GPIO_PIN is accessible and its address can be passed.
    // This will be set up in main.c when calling this function.
    // esp_mqtt_client_register_event(client_handle, ESP_EVENT_ANY_ID, network_mqtt_event_handler_cb, (void*)&LED_GPIO_PIN_FROM_MAIN);
    // For now, passing NULL. Will adjust main to pass the arg.
    // The handler_args in network_mqtt_event_handler_cb will receive this.     
    // To make this more robust, network_mqtt_app_start could take the pin as an argument.
    // For now, main.c will need to pass the address of its LED_GPIO_PIN variable.     
    // We will adjust main.c to pass the LED_GPIO_PIN to this function, which then passes to register_event
    // Let's assume network_mqtt_app_start will take a gpio_num_t argument for the LED pin.

    // Simplification: Pass NULL for now, main.c must set up the handler args correctly.    
    // esp_mqtt_client_register_event(client_handle, ESP_EVENT_ANY_ID, network_mqtt_event_handler_cb, NULL);
    // Correct approach: network_mqtt_app_start should accept the pin and pass it.
    // For now, the callback will have to be adapted or main provide the pin to it. The current callback expects it via handler_args.
    // The provided signature for network_mqtt_app_start doesn't take args. Will modify main.c to call the event registration itself or modify this function.
    // For this iteration, let main.c register the event with the correct arguments.
    // This function will just init and start.
    esp_mqtt_client_start(client_handle);
    ESP_LOGI(TAG_NET, "MQTT client started.");
}

// This internal handler is registered for Wi-Fi/IP events
static void wifi_event_handler_internal(void* arg, esp_event_base_t event_base,
                                int32_t event_id, void* event_data)
{
    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
        esp_wifi_connect();
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        ESP_LOGI(TAG_NET, "Wi-Fi disconnected, trying to reconnect...");
        esp_wifi_connect(); // Simple reconnect
    } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        ip_event_got_ip_t* event = (ip_event_got_ip_t*) event_data;
        ESP_LOGI(TAG_NET, "got ip:" IPSTR, IP2STR(&event->ip_info.ip));
        
        // Get the LED pin from arg, passed from network_wifi_init_sta
        if (arg) {
            gpio_num_t led_pin_for_mqtt = *(gpio_num_t*)arg;
            // Register event handler with the LED pin now that we have it.
            // This assumes client_handle is initialized by network_mqtt_app_start which is called after this.
            // This is a bit tangled. Let's simplify.
            // network_mqtt_app_start should be called here, and *it* should handle its event registration.
            // The arg to wifi_event_handler_internal can be the LED pin for MQTT handler setup.
            esp_mqtt_client_register_event(client_handle, ESP_EVENT_ANY_ID, network_mqtt_event_handler_cb, arg /* Pass led_pin as arg */);
        }
        network_mqtt_app_start(); // Starts client, which should then register its own event handler *with the pin*
    }
}

void network_wifi_init_sta(void) // Modified to accept LED pin for MQTT handler
{
    // This function will now need the LED_GPIO_PIN to pass to the wifi_event_handler, 
    // which in turn passes it to the mqtt_event_handler. This is getting complex.
    // A better way: main.c gets the LED_GPIO_PIN. Calls network_wifi_init_sta.
    // After IP, main.c calls network_mqtt_app_start, passing LED_GPIO_PIN to it.
    // network_mqtt_app_start then registers network_mqtt_event_handler_cb with that pin.
    // Let's adjust network_mqtt_app_start to take the pin.

    // Current approach: wifi_event_handler_internal will call network_mqtt_app_start() WITHOUT the pin.
    // network_mqtt_app_start() will then register ITS OWN callback network_mqtt_event_handler_cb, but it needs the pin.
    // This means client_handle must be accessible to network_mqtt_event_handler_cb or its setup.

    // Simpler: main calls network_wifi_init_sta. When IP is obtained, main calls network_mqtt_app_start(LED_GPIO_PIN).
    // Let's revert wifi_event_handler_internal to not take args and simply call network_mqtt_app_start (which will be modified).

    ESP_ERROR_CHECK(esp_netif_init());
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    esp_netif_create_default_wifi_sta();

    wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
    ESP_ERROR_CHECK(esp_wifi_init(&cfg));

    esp_event_handler_instance_t instance_any_id;
    esp_event_handler_instance_t instance_got_ip;
    // Pass NULL as arg here, the MQTT setup will be triggered by main after IP is obtained.
    ESP_ERROR_CHECK(esp_event_handler_instance_register(WIFI_EVENT, ESP_EVENT_ANY_ID, &wifi_event_handler_internal, NULL, &instance_any_id));
    ESP_ERROR_CHECK(esp_event_handler_instance_register(IP_EVENT, IP_EVENT_STA_GOT_IP, &wifi_event_handler_internal, NULL, &instance_got_ip));

    wifi_config_t wifi_config = {
        .sta = {
            //.ssid = WIFI_SSID, // Use Kconfig
            //.password = WIFI_PASS, // Use Kconfig
            .threshold.authmode = WIFI_AUTH_WPA2_PSK, // Example, adjust as needed
        },
    };
    // For Kconfig, SSID and password are set if CONFIG_ESP_WIFI_SSID and CONFIG_ESP_WIFI_PASSWORD are in sdkconfig
    // If you are using #defines directly like before, uncomment above and fill them.
    // For this example, we assume Kconfig via sdkconfig will provide SSID/PASS.
    // If not using Kconfig for SSID/PASS, ensure they are set in wifi_config.sta.ssid and .password
    strncpy((char*)wifi_config.sta.ssid, WIFI_SSID, sizeof(wifi_config.sta.ssid));
    strncpy((char*)wifi_config.sta.password, WIFI_PASS, sizeof(wifi_config.sta.password));


    ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA) );
    ESP_ERROR_CHECK(esp_wifi_set_config(WIFI_IF_STA, &wifi_config) );
    ESP_ERROR_CHECK(esp_wifi_start() );

    ESP_LOGI(TAG_NET, "wifi_init_sta finished.");
    ESP_LOGI(TAG_NET, "connect to ap SSID:%s", WIFI_SSID);
}

// Modify network_mqtt_app_start to accept the pin for the handler_args
void network_mqtt_app_start_with_pin(gpio_num_t led_pin)
{
    esp_mqtt_client_config_t mqtt_cfg = {
        .uri = MQTT_BROKER_URL,
    };
    client_handle = esp_mqtt_client_init(&mqtt_cfg);
    
    // We need to pass the address of a gpio_num_t. 
    // If led_pin is a local copy, its address is temporary.
    // Best if main.c owns the gpio_num_t variable and passes its address.
    // For now, let's assume led_pin itself (if it's global or static in main) can be cast and passed.
    // This is tricky. The handler_args needs to be valid for the lifetime of the handler.
    // A static variable in this file to hold the pin, set by this function, is safer.
    static gpio_num_t mqtt_handler_led_pin;
    mqtt_handler_led_pin = led_pin;

    esp_mqtt_client_register_event(client_handle, ESP_EVENT_ANY_ID, network_mqtt_event_handler_cb, &mqtt_handler_led_pin);
    esp_mqtt_client_start(client_handle);
    ESP_LOGI(TAG_NET, "MQTT client started with LED pin %d for handler.", led_pin);
}

// Original network_mqtt_app_start, now calls the one with pin if we decide to pass it this way.
// For clarity, main.c should call network_mqtt_app_start_with_pin directly.
// So, we rename network_mqtt_app_start_with_pin to network_mqtt_app_start and update header.
// The header for network_mqtt_app_start needs to be updated if it takes an arg.
// The current header for network_mqtt_app_start has no args.
// Let's modify the header and this function name to reflect it takes the pin.

// Renaming network_mqtt_app_start_with_pin to network_mqtt_app_start and assuming header is updated.
// The header has `void network_mqtt_app_start(void);`
// This means main will call this, and this function needs to get the pin some other way, or the event handler needs to be registered by main.

// To stick to the current header `void network_mqtt_app_start(void);`:
// The event registration with the pin needs to happen in main.c after calling this, or this function needs a way to get the pin.
// Let's go with: main.c registers the event handler using client_handle returned by this init function (if it returned it).
// Or, make client_handle static global here and main.c can call esp_mqtt_client_register_event itself.
// Let's make client_handle static here. main.c can then register the event handler.
// Getter for client_handle:
esp_mqtt_client_handle_t network_get_mqtt_client_handle(void) {
    return client_handle;
}

// network_mqtt_app_start will just init and start the client.
// main.c will be responsible for registering the event handler with the correct (void*)led_gpio_pin_ptr argument.
void network_mqtt_app_start(void) // Matches header: void network_mqtt_app_start(void);
{
    esp_mqtt_client_config_t mqtt_cfg = {
        .uri = MQTT_BROKER_URL,
    };
    if (client_handle) {
        ESP_LOGW(TAG_NET, "MQTT client already initialized. Re-starting.");
        esp_mqtt_client_stop(client_handle);
        esp_mqtt_client_destroy(client_handle);
    }
    client_handle = esp_mqtt_client_init(&mqtt_cfg);
    // Event registration will be done in main.c using network_get_mqtt_client_handle()
    // and network_mqtt_event_handler_cb
    esp_mqtt_client_start(client_handle);
    ESP_LOGI(TAG_NET, "MQTT client initialized and started. Register event handler in main.");
} 