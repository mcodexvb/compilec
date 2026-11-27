/* Sample problem 13: Addition of two matrices */
#include <stdio.h>

int main(void)
{
    int r, c, a[10][10], b[10][10], sum[10][10];

    printf("Rows and columns: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix A (%d x %d):\n", r, c);
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    printf("Enter matrix B (%d x %d):\n", r, c);
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &b[i][j]);

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            sum[i][j] = a[i][j] + b[i][j];

    printf("A + B =\n");
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++)
            printf("%5d", sum[i][j]);
        printf("\n");
    }
    return 0;
}
