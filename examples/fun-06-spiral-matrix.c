/* Fill an n x n matrix with 1, 2, 3, ... in a clockwise spiral.
   Walk in one direction until the next cell is outside the matrix or already
   filled, then turn right. */
#include <stdio.h>

int main(void)
{
    int n, a[20][20] = {{0}};
    int dr[4] = {0, 1, 0, -1}, dc[4] = {1, 0, -1, 0};   /* right, down, left, up */

    printf("Size of the spiral (1 to 20): ");
    scanf("%d", &n);
    if (n < 1 || n > 20) {
        printf("Please choose a size from 1 to 20.\n");
        return 1;
    }

    int r = 0, c = 0, d = 0;
    for (int k = 1; k <= n * n; k++) {
        a[r][c] = k;
        int nr = r + dr[d], nc = c + dc[d];
        if (nr < 0 || nr >= n || nc < 0 || nc >= n || a[nr][nc] != 0) {
            d = (d + 1) % 4;                             /* turn right */
            nr = r + dr[d]; nc = c + dc[d];
        }
        r = nr; c = nc;
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            printf("%4d", a[i][j]);
        putchar('\n');
    }
    return 0;
}
