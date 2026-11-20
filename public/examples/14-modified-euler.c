/* Practical 14: Solution of y' = f(x, y) by the modified Euler method */
#include <stdio.h>
#include <math.h>

double f(double x, double y)
{
    return x + y;                            /* change the ODE here */
}

int main(void)
{
    int i, n;
    double x, y, h, xend, yp, exact;

    printf("Initial values x0 y0: ");
    scanf("%lf %lf", &x, &y);
    printf("Step size h and final x: ");
    scanf("%lf %lf", &h, &xend);

    n = (int) floor((xend - x) / h + 0.5);
    printf("\n    x        predictor     y (corrected)     exact\n");
    printf("%6.2f %14s %15.7f %13.7f\n", x, "", y, 2 * exp(x) - x - 1);
    for (i = 1; i <= n; i++) {
        yp = y + h * f(x, y);                        /* predictor */
        y = y + h / 2.0 * (f(x, y) + f(x + h, yp));  /* corrector */
        x = x + h;
        exact = 2 * exp(x) - x - 1;                  /* exact solution of the test problem */
        printf("%6.2f %14.7f %15.7f %13.7f\n", x, yp, y, exact);
    }
    return 0;
}
