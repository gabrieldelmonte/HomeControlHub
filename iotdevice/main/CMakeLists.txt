idf_component_register(SRCS "main.c" "hal/led_control.c" "hal/network_mqtt_handler.c"
                    INCLUDE_DIRS "." "hal"
                    REQUIRES nvs_flash esp_wifi esp_event esp_netif mqtt freertos)
