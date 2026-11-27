/* Sample problem 14: Transpose of a matrix */
#include <stdio.h>

int main(void)
{
    int r, c, a[10][10], t[10][10];

    printf("Rows and columns: ");
    scanf("%d %d", &r, &c);
    printf("Enter the matrix (%d x %d):\n", r, c);
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            t[j][i] = a[i][j];              /* row i becomes column i */

    printf("Transpose (%d x %d):\n", c, r);
    for (int i = 0; i < c; i++) {
        for (int j = 0; j < r; j++)
            printf("%5d", t[i][j]);
        printf("\n");
    }
    return 0;
}
