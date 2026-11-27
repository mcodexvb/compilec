#include <stdio.h>

#define PI 3.14159265
#define TAX_PERCENT 18

enum Day { MON = 1, TUE, WED };

int main(void)
{
    const int days_in_week = 7;
    double radius = 2.0;

    printf("%d %d %d\n", 42, 052, 0x2A);
    printf("%.1f %.3f\n", 2.5e3, 1.5E-2);

    for (char c = 'A'; c <= 'E'; ++c) {
        printf("%c=%d ", c, c);
    }
    printf("\n");

    printf("Area of a circle of radius %.0f is %.2f\n", radius, PI * radius * radius);
    printf("Tax on 200 is %d\n", 200 * TAX_PERCENT / 100);
    printf("There are %d days in a week.\n", days_in_week);
    printf("WED has the value %d\n", WED);
    return 0;
}
