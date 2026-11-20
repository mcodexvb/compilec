/* Practical 5: Integration by the composite Simpson's 1/3 rule */
#include <stdio.h>

double f(double x)
{
    return 1.0 / (1.0 + x * x);
}

int main(void)
{
    int n, i;
    double a, b, h, sum;

    printf("Lower and upper limits a b: ");
    scanf("%lf %lf", &a, &b);
    printf("Number of sub-intervals n (even): ");
    scanf("%d", &n);
    if (n % 2 != 0) {
        printf("n must be even for Simpson's 1/3 rule.\n");
        return 1;
    }

    h = (b - a) / n;
    sum = f(a) + f(b);
    for (i = 1; i < n; i++) {
        if (i % 2 == 1)
            sum = sum + 4.0 * f(a + i * h);  /* odd ordinates  */
        else
            sum = sum + 2.0 * f(a + i * h);  /* even ordinates */
    }
    sum = sum * h / 3.0;

    printf("\nh = %.6f\nIntegral by Simpson's 1/3 rule = %.7f\n", h, sum);
    return 0;
}
