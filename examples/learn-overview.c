#include <stdio.h>

int main(void)
{
    unsigned int n = 202;

    printf("Decimal %u is binary ", n);
    for (int bit = 7; bit >= 0; --bit) {
        putchar(((n >> bit) & 1u) ? '1' : '0');
    }
    printf(" and hexadecimal %X\n", n);

    size_t bytes = sizeof(int);
    printf("An int takes %zu bytes = %zu bits.\n", bytes, 8 * bytes);
    return 0;
}
