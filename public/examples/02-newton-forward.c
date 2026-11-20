/* Practical 2: Interpolation by Newton's forward difference formula */
#include <stdio.h>

int main(void)
{
    int n, i, j;
    double x[20], d[20][20], xp, h, p, term, y;

    printf("Number of data points: ");
    scanf("%d", &n);
    printf("Enter x and y (x equally spaced):\n");
    for (i = 0; i < n; i++)
        scanf("%lf %lf", &x[i], &d[i][0]);
    printf("Interpolate at x = ");
    scanf("%lf", &xp);

    /* forward difference table: d[i][j] = Delta^j y_i */
    for (j = 1; j < n; j++)
        for (i = 0; i < n - j; i++)
            d[i][j] = d[i + 1][j - 1] - d[i][j - 1];

    printf("\nForward difference table\n");
    for (i = 0; i < n; i++) {
        printf("%8.3f", x[i]);
        for (j = 0; j < n - i; j++)
            printf("%10.4f", d[i][j]);
        printf("\n");
    }

    h = x[1] - x[0];
    p = (xp - x[0]) / h;
    y = d[0][0];
    term = 1.0;
    for (j = 1; j < n; j++) {
        term = term * (p - j + 1) / j;      /* p(p-1)...(p-j+1)/j! */
        y = y + term * d[0][j];
    }
    printf("\np = %.4f\nValue of y at x = %g is %.6f\n", p, xp, y);
    return 0;
}
