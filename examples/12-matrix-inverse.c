/* Practical 12: Matrix inversion by Gauss-Jordan elimination
   with partial pivoting on [A | I] */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int n, i, j, k, p;
    double a[10][20], t, piv, m;

    printf("Order of the matrix n: ");
    scanf("%d", &n);
    printf("Enter the matrix row by row:\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++)
            scanf("%lf", &a[i][j]);
        for (j = n; j < 2 * n; j++)
            a[i][j] = (j - n == i) ? 1.0 : 0.0;    /* identity on the right */
    }

    for (k = 0; k < n; k++) {
        p = k;
        for (i = k + 1; i < n; i++)
            if (fabs(a[i][k]) > fabs(a[p][k]))
                p = i;
        if (fabs(a[p][k]) < 1e-12) {
            printf("Matrix is singular; no inverse.\n");
            return 1;
        }
        if (p != k)
            for (j = 0; j < 2 * n; j++) {
                t = a[k][j]; a[k][j] = a[p][j]; a[p][j] = t;
            }
        piv = a[k][k];
        for (j = 0; j < 2 * n; j++)
            a[k][j] = a[k][j] / piv;              /* make pivot 1 */
        for (i = 0; i < n; i++)
            if (i != k) {
                m = a[i][k];
                for (j = 0; j < 2 * n; j++)
                    a[i][j] = a[i][j] - m * a[k][j];
            }
    }

    printf("\nInverse matrix:\n");
    for (i = 0; i < n; i++) {
        for (j = n; j < 2 * n; j++)
            printf("%11.5f", a[i][j]);
        printf("\n");
    }
    return 0;
}
