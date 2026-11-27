/* Sample problem 21: Area under the curve y = f(x) from a to b
   by the trapezoidal rule and by Simpson's 1/3 rule. */
#include <stdio.h>
#include <math.h>

double f(double x)
{
    return x * x + 1.0;                    /* change the curve here */
}

int main(void)
{
    double a, b;
    int n;

    printf("Limits a b and an even number of strips n: ");
    scanf("%lf %lf %d", &a, &b, &n);
    if (n % 2 != 0) {
        printf("n must be even for Simpson's rule.\n");
        return 1;
    }

    double h = (b - a) / n;
    double trap = f(a) + f(b);
    double simp = f(a) + f(b);
    for (int i = 1; i < n; i++) {
        double x = a + i * h;
        trap += 2 * f(x);
        simp += (i % 2 == 1 ? 4 : 2) * f(x);
    }
    trap *= h / 2;
    simp *= h / 3;

    printf("h = %.4f\n", h);
    printf("Trapezoidal rule : %.6f\n", trap);
    printf("Simpson's rule   : %.6f\n", simp);
    return 0;
}
