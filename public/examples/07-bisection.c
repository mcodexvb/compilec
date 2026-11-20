/* Practical 7: Root of f(x) = 0 by the bisection method */
#include <stdio.h>
#include <math.h>

double f(double x)
{
    return x * x * x - 2.0 * x - 5.0;       /* change the function here */
}

int main(void)
{
    int k = 0, maxit = 100;
    double a, b, c, tol;

    printf("Enter a b (f(a) and f(b) of opposite signs): ");
    scanf("%lf %lf", &a, &b);
    printf("Tolerance: ");
    scanf("%lf", &tol);
    if (f(a) * f(b) > 0) {
        printf("f(a) and f(b) have the same sign. Choose another interval.\n");
        return 1;
    }

    printf("\n  k         a           b           c          f(c)\n");
    do {
        c = (a + b) / 2.0;
        k++;
        printf("%3d %11.6f %11.6f %11.6f %13.6f\n", k, a, b, c, f(c));
        if (f(c) == 0.0)
            break;
        if (f(a) * f(c) < 0)
            b = c;
        else
            a = c;
    } while (fabs(b - a) / 2.0 >= tol && k < maxit);

    printf("\nRoot = %.4f after %d iterations\n", (a + b) / 2.0, k);
    return 0;
}
