/* Practical 11: System of linear equations by the Gauss-Seidel method */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int n, i, j, k = 0, maxit = 100;
    double a[10][11], x[10], s, xnew, err, tol;

    printf("Number of equations n: ");
    scanf("%d", &n);
    printf("Enter the augmented matrix [A | b] (diagonally dominant):\n");
    for (i = 0; i < n; i++)
        for (j = 0; j <= n; j++)
            scanf("%lf", &a[i][j]);
    printf("Tolerance: ");
    scanf("%lf", &tol);

    for (i = 0; i < n; i++)
        x[i] = 0.0;                             /* starting vector */

    printf("\n  k");
    for (i = 0; i < n; i++)
        printf("        x%d", i + 1);
    printf("\n");
    do {
        err = 0.0;
        for (i = 0; i < n; i++) {
            s = a[i][n];
            for (j = 0; j < n; j++)
                if (j != i)
                    s = s - a[i][j] * x[j];     /* newest values used */
            xnew = s / a[i][i];
            if (fabs(xnew - x[i]) > err)
                err = fabs(xnew - x[i]);
            x[i] = xnew;
        }
        k++;
        printf("%3d", k);
        for (i = 0; i < n; i++)
            printf("%10.5f", x[i]);
        printf("\n");
    } while (err >= tol && k < maxit);

    printf("\nSolution after %d iterations:\n", k);
    for (i = 0; i < n; i++)
        printf("x%d = %.4f\n", i + 1, x[i]);
    return 0;
}
