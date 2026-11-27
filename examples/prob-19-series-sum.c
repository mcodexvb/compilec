/* Sample problem 19: Sum of a series.
   e^x = 1 + x + x^2/2! + x^3/3! + ...
   Terms are added until a term becomes smaller than the tolerance eps. */
#include <stdio.h>
#include <math.h>

int main(void)
{
    double x, eps, term = 1.0, sum = 1.0;    /* the first term is 1 */
    int n = 0;

    printf("Enter x and the tolerance eps: ");
    scanf("%lf %lf", &x, &eps);

    while (fabs(term) >= eps) {
        n++;
        term = term * x / n;                  /* x^n/n! from the previous term */
        sum += term;
    }

    printf("Terms added   : %d\n", n + 1);
    printf("Series sum    : %.10f\n", sum);
    printf("exp(x) library: %.10f\n", exp(x));
    printf("Difference    : %.2e\n", fabs(sum - exp(x)));
    return 0;
}
