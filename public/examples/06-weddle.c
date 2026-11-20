/* Practical 6: Integration by the composite Weddle's rule */
#include <stdio.h>

double f(double x)
{
    return 1.0 / (1.0 + x * x);
}

int main(void)
{
    int n, k;
    double a, b, h, sum, x;

    printf("Lower and upper limits a b: ");
    scanf("%lf %lf", &a, &b);
    printf("Number of sub-intervals n (multiple of 6): ");
    scanf("%d", &n);
    if (n % 6 != 0) {
        printf("n must be a multiple of 6 for Weddle's rule.\n");
        return 1;
    }

    h = (b - a) / n;
    sum = 0.0;
    for (k = 0; k < n; k = k + 6) {          /* one block of six intervals */
        x = a + k * h;
        sum = sum + f(x) + 5.0 * f(x + h) + f(x + 2 * h) + 6.0 * f(x + 3 * h)
                  + f(x + 4 * h) + 5.0 * f(x + 5 * h) + f(x + 6 * h);
    }
    sum = sum * 3.0 * h / 10.0;

    printf("\nh = %.6f\nIntegral by Weddle's rule = %.7f\n", h, sum);
    return 0;
}
