/* Sample problem 3: Read 10 numbers from the keyboard, find their average */
#include <stdio.h>

int main(void)
{
    double x, sum = 0.0;

    printf("Enter 10 numbers: ");
    for (int i = 1; i <= 10; i++) {
        scanf("%lf", &x);
        sum += x;
    }
    printf("Sum     = %.2f\n", sum);
    printf("Average = %.2f\n", sum / 10);
    return 0;
}
