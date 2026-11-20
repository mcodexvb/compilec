/* Practical 9: Root of f(x) = 0 by the regula falsi method */
#include <stdio.h>
#include <math.h>

double f(double x)
{
    return x * x * x - 2.0 * x - 5.0;
}

int main(void)
{
    int k = 0, maxit = 100;
    double a, b, c, cold, tol;

    printf("Enter a b (f(a) and f(b) of opposite signs): ");
    scanf("%lf %lf", &a, &b);
    printf("Tolerance: ");
    scanf("%lf", &tol);
    if (f(a) * f(b) > 0) {
        printf("f(a) and f(b) have the same sign.\n");
        return 1;
    }

    c = a;
    printf("\n  k         a           b           c          f(c)\n");
    do {
        cold = c;
        c = (a * f(b) - b * f(a)) / (f(b) - f(a));
        k++;
        printf("%3d %11.6f %11.6f %11.6f %13.6f\n", k, a, b, c, f(c));
        if (f(a) * f(c) < 0)
            b = c;
        else
            a = c;
    } while (fabs(c - cold) >= tol && fabs(f(c)) >= tol && k < maxit);

    printf("\nRoot = %.6f after %d iterations\n", c, k);
    return 0;
}
