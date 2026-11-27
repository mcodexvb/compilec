/* Sample problem 15: Product of two matrices */
#include <stdio.h>

int main(void)
{
    int r1, c1, r2, c2;
    int a[10][10], b[10][10], p[10][10];

    printf("Size of A (rows columns): ");
    scanf("%d %d", &r1, &c1);
    printf("Size of B (rows columns): ");
    scanf("%d %d", &r2, &c2);
    if (c1 != r2) {
        printf("The product is not defined: columns of A must equal rows of B.\n");
        return 1;
    }

    printf("Enter A:\n");
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++)
            scanf("%d", &a[i][j]);
    printf("Enter B:\n");
    for (int i = 0; i < r2; i++)
        for (int j = 0; j < c2; j++)
            scanf("%d", &b[i][j]);

    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            p[i][j] = 0;
            for (int k = 0; k < c1; k++)
                p[i][j] += a[i][k] * b[k][j];   /* row i of A times column j of B */
        }
    }

    printf("A x B (%d x %d):\n", r1, c2);
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++)
            printf("%6d", p[i][j]);
        printf("\n");
    }
    return 0;
}
