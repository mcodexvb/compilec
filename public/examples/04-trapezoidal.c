/* Practical 4: Integration by the composite trapezoidal rule */
#include <stdio.h>

double f(double x)
{
    return 1.0 / (1.0 + x * x);             /* change the integrand here */
}

int main(void)
{
    int n, i;
    double a, b, h, sum;

    printf("Lower and upper limits a b: ");
    scanf("%lf %lf", &a, &b);
    printf("Number of sub-intervals n: ");
    scanf("%d", &n);

    h = (b - a) / n;
    sum = f(a) + f(b);
    for (i = 1; i < n; i++)
        sum = sum + 2.0 * f(a + i * h);
    sum = sum * h / 2.0;

    printf("\nh = %.6f\nIntegral by trapezoidal rule = %.7f\n", h, sum);
    return 0;
}
