/* Practical 8: Root of f(x) = 0 by the Newton-Raphson method */
#include <stdio.h>
#include <math.h>

double f(double x)  { return x * x * x - 2.0 * x - 5.0; }
double df(double x) { return 3.0 * x * x - 2.0; }

int main(void)
{
    int k = 0, maxit = 50;
    double x0, x1, tol;

    printf("Initial approximation x0: ");
    scanf("%lf", &x0);
    printf("Tolerance: ");
    scanf("%lf", &tol);

    printf("\n  k          x_k               f(x_k)\n");
    do {
        if (fabs(df(x0)) < 1e-12) {
            printf("Derivative is zero; choose another x0.\n");
            return 1;
        }
        x1 = x0 - f(x0) / df(x0);
        k++;
        printf("%3d %16.10f %18.3e\n", k, x1, f(x1));
        if (fabs(x1 - x0) < tol)
            break;
        x0 = x1;
    } while (k < maxit);

    printf("\nRoot = %.6f after %d iterations\n", x1, k);
    return 0;
}
