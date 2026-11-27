/* Roman numerals. Give a whole number from 1 to 3999 and the program writes it
   with Roman numerals; enter 0 to stop. The idea is to subtract the largest
   value that fits, again and again, with the six "subtractive" pairs (CM, CD,
   XC, XL, IX, IV) listed in the table. */
#include <stdio.h>

int main(void)
{
    const int value[13] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    const char *symbol[13] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    int n;

    for (;;) {
        printf("Number (1 to 3999, 0 to stop): ");
        if (scanf("%d", &n) != 1 || n == 0)
            break;
        if (n < 1 || n > 3999) {
            printf("  Out of range.\n");
            continue;
        }
        printf("  %d = ", n);
        for (int i = 0; i < 13; i++)
            while (n >= value[i]) {
                printf("%s", symbol[i]);
                n -= value[i];
            }
        putchar('\n');
    }
    return 0;
}
