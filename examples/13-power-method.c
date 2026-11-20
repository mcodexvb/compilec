/* Practical 13: Largest eigenvalue and eigenvector by the power method */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int n, i, j, k = 0, maxit = 100;
    double a[10][10], x[10], y[10], lam, lamold, tol;

    printf("Order of the matrix n: ");
    scanf("%d", &n);
    printf("Enter the matrix row by row:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%lf", &a[i][j]);
    printf("Enter the starting vector:\n");
    for (i = 0; i < n; i++)
        scanf("%lf", &x[i]);
    printf("Tolerance: ");
    scanf("%lf", &tol);

    lam = 0.0;
    printf("\n  k     lambda      eigenvector\n");
    do {
        lamold = lam;
        for (i = 0; i < n; i++) {              /* y = A x */
            y[i] = 0.0;
            for (j = 0; j < n; j++)
                y[i] = y[i] + a[i][j] * x[j];
        }
        lam = y[0];                            /* component of largest modulus */
        for (i = 1; i < n; i++)
            if (fabs(y[i]) > fabs(lam))
                lam = y[i];
        for (i = 0; i < n; i++)
            x[i] = y[i] / lam;                 /* normalise */
        k++;
        printf("%3d %11.6f   ", k, lam);
        for (i = 0; i < n; i++)
            printf("%10.6f", x[i]);
        printf("\n");
    } while (fabs(lam - lamold) >= tol && k < maxit);

    printf("\nLargest eigenvalue = %.4f\nEigenvector = (", lam);
    for (i = 0; i < n; i++)
        printf("%.4f%s", x[i], i < n - 1 ? ", " : ")\n");
    return 0;
}
