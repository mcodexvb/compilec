#include <stdio.h>

int main(void)
{
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int t[3][2];

    for (int i = 0; i < 2; ++i) {
        int row_sum = 0;
        for (int j = 0; j < 3; ++j) {
            row_sum += a[i][j];
            t[j][i] = a[i][j];
        }
        printf("Row %d sums to %d\n", i, row_sum);
    }

    printf("Transpose:\n");
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 2; ++j) {
            printf("%3d", t[i][j]);
        }
        printf("\n");
    }

    int cube[2][2][2] = {{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}};
    printf("cube[1][0][1] = %d\n", cube[1][0][1]);
    size_t rows = sizeof a / sizeof a[0];
    size_t cols = sizeof a[0] / sizeof a[0][0];
    printf("a has %zu rows and %zu columns\n", rows, cols);
    return 0;
}
