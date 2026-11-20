/* Practical 1: Interpolation by Lagrange's formula */
#include <stdio.h>

int main(void)
{
    int n, i, j;
    double x[20], y[20], xp, term, sum;

    printf("Number of data points: ");
    scanf("%d", &n);
    printf("Enter x and y for each point:\n");
    for (i = 0; i < n; i++)
        scanf("%lf %lf", &x[i], &y[i]);
    printf("Interpolate at x = ");
    scanf("%lf", &xp);

    sum = 0.0;
    for (i = 0; i < n; i++) {
        term = y[i];                        /* y_i * L_i(xp) */
        for (j = 0; j < n; j++)
            if (j != i)
                term = term * (xp - x[j]) / (x[i] - x[j]);
        sum = sum + term;
    }
    printf("\nValue of y at x = %g is %.6f\n", xp, sum);
    return 0;
}
