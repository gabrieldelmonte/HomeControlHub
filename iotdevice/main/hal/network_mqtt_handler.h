#ifndef NETWORK_MQTT_HANDLER_H
#define NETWORK_MQTT_HANDLER_H

#include "esp_event.h"
#include "mqtt_client.h"
#include "driver/gpio.h" // For gpio_num_t in callback signature if used directly

/**
 * @brief Initializes Wi-Fi connection in STA mode.
 */
void network_wifi_init_sta(void);

/**
 * @brief Initializes and starts the MQTT client application.
 *
 * Call this after Wi-Fi is connected. The MQTT event handler
 * should be registered separately in main after calling this.
 */
void network_mqtt_app_start(void);

/**
 * @brief Gets the MQTT client handle.
 *
 * @return esp_mqtt_client_handle_t The client handle, or NULL if not initialized.
 */
esp_mqtt_client_handle_t network_get_mqtt_client_handle(void);

/**
 * @brief Callback function for MQTT events.
 *
 * @param handler_args Arguments passed during registration (expected to be gpio_num_t* for LED pin).
 * @param base Event base.
 * @param event_id Event ID.
 * @param event_data Event data.
 */
void network_mqtt_event_handler_cb(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data);

/**
 * @brief Get the LED command topic string.
 *
 * @param buffer Buffer to store the topic string.
 * @param buffer_size Size of the buffer.
 * @return Pointer to the buffer if successful, NULL otherwise.
 */
const char* network_get_led_command_topic(char *buffer, size_t buffer_size);

#endif // NETWORK_MQTT_HANDLER_H 