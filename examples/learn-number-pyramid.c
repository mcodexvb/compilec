#include <stdio.h>

int main(void)
{
    const int height = 4;
    for (int row = 1; row <= height; ++row) {
        for (int space = 0; space < height - row; ++space) {
            putchar(' ');
        }
        for (int digit = 1; digit <= row; ++digit) {
            printf("%d", digit);
        }
        for (int digit = row - 1; digit >= 1; --digit) {
            printf("%d", digit);
        }
        putchar('\n');
    }
    return 0;
}
