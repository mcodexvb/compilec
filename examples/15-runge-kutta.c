/* Practical 15: Solution of y' = f(x, y) by the fourth-order
   Runge-Kutta method */
#include <stdio.h>
#include <math.h>

double f(double x, double y)
{
    return x + y;
}

int main(void)
{
    int i, n;
    double x, y, h, xend, k1, k2, k3, k4;

    printf("Initial values x0 y0: ");
    scanf("%lf %lf", &x, &y);
    printf("Step size h and final x: ");
    scanf("%lf %lf", &h, &xend);

    n = (int) floor((xend - x) / h + 0.5);
    printf("\n    x        k1         k2         k3         k4          y          exact\n");
    printf("%6.2f %44s %12.7f %12.7f\n", x, "", y, 2 * exp(x) - x - 1);
    for (i = 1; i <= n; i++) {
        k1 = h * f(x, y);
        k2 = h * f(x + h / 2.0, y + k1 / 2.0);
        k3 = h * f(x + h / 2.0, y + k2 / 2.0);
        k4 = h * f(x + h, y + k3);
        y = y + (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0;
        x = x + h;
        printf("%6.2f %10.6f %10.6f %10.6f %10.6f %12.7f %12.7f\n",
               x, k1, k2, k3, k4, y, 2 * exp(x) - x - 1);   /* exact solution of the test problem */
    }
    return 0;
}
