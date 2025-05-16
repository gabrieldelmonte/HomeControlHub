#ifndef LED_CONTROL_H
#define LED_CONTROL_H

#include "driver/gpio.h"

/**
 * @brief Initializes the LED GPIO pin.
 *
 * @param gpio_num The GPIO number where the LED is connected.
 */
void led_init(gpio_num_t gpio_num);

/**
 * @brief Sets the state of the LED.
 *
 * @param gpio_num The GPIO number where the LED is connected.
 * @param state true to turn LED on, false to turn LED off.
 */
void led_set_state(gpio_num_t gpio_num, bool state);

#endif // LED_CONTROL_H 