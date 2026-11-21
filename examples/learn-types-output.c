#include <stdio.h>

int main(void)
{
    int count = 4;
    const double price = 12.50;
    char section = 'A';

    printf("Section %c: %d items\n", (int)section, count);
    printf("Total: %.2f\n", count * price);
    return 0;
}
