#include "led_control.h"

void led_init(gpio_num_t gpio_num) {
    gpio_config_t io_conf = {};
    io_conf.intr_type = GPIO_INTR_DISABLE;
    io_conf.mode = GPIO_MODE_OUTPUT;
    io_conf.pin_bit_mask = (1ULL << gpio_num);
    io_conf.pull_down_en = 0;
    io_conf.pull_up_en = 0;
    gpio_config(&io_conf);
}

void led_set_state(gpio_num_t gpio_num, bool state) {
    gpio_set_level(gpio_num, state ? 1 : 0);
} 