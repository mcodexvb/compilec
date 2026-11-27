#include <stdio.h>

int main(void)
{
    int a = 7, b = 3;

    printf("a > b: %d   a == b: %d   a != b: %d\n", a > b, a == b, a != b);
    printf("1 <= a <= 10 is %d\n", a >= 1 && a <= 10);
    printf("!(a > b): %d   (a < b) || (b > 0): %d\n", !(a > b), (a < b) || (b > 0));

    int x = 10;
    x += 5;
    x -= 3;
    x *= 2;
    x /= 4;
    x %= 4;
    printf("x = %d\n", x);

    int i = 5;
    int j = i++;
    int k = ++i;
    printf("i = %d, j = %d, k = %d\n", i, j, k);

    int d = 0;
    if (d != 0 && 10 / d > 1) {
        printf("not reached\n");
    } else {
        printf("The test 10 / d was skipped, so there was no division by zero.\n");
    }

    printf("2 + 3 * 4 = %d, (2 + 3) * 4 = %d\n", 2 + 3 * 4, (2 + 3) * 4);
    printf("The larger of a and b is %d\n", a > b ? a : b);
    return 0;
}
