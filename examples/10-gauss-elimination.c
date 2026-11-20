/* Practical 10: System of linear equations by Gaussian elimination
   with partial pivoting */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int n, i, j, k, p;
    double a[10][11], x[10], m, t, s;

    printf("Number of equations n: ");
    scanf("%d", &n);
    printf("Enter the augmented matrix [A | b] row by row:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j <= n; j++)
            scanf("%lf", &a[i][j]);

    for (k = 0; k < n - 1; k++) {
        p = k;                                  /* partial pivoting */
        for (i = k + 1; i < n; i++)
            if (fabs(a[i][k]) > fabs(a[p][k]))
                p = i;
        if (fabs(a[p][k]) < 1e-12) {
            printf("Matrix is singular.\n");
            return 1;
        }
        if (p != k)
            for (j = k; j <= n; j++) {
                t = a[k][j]; a[k][j] = a[p][j]; a[p][j] = t;
            }
        for (i = k + 1; i < n; i++) {           /* elimination */
            m = a[i][k] / a[k][k];
            for (j = k; j <= n; j++)
                a[i][j] = a[i][j] - m * a[k][j];
        }
    }

    printf("\nUpper triangular system:\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j <= n; j++)
            printf("%11.5f", a[i][j]);
        printf("\n");
    }

    for (i = n - 1; i >= 0; i--) {              /* back substitution */
        s = a[i][n];
        for (j = i + 1; j < n; j++)
            s = s - a[i][j] * x[j];
        x[i] = s / a[i][i];
    }

    printf("\nSolution:\n");
    for (i = 0; i < n; i++)
        printf("x%d = %10.6f\n", i + 1, x[i]);
    return 0;
}
