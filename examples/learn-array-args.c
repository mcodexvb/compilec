#include <stdio.h>

double average(const int a[], int n)
{
    int sum = 0;
    for (int i = 0; i < n; ++i) {
        sum += a[i];
    }
    return (double)sum / n;
}

void double_all(int a[], int n)   /* a is the caller's own array */
{
    for (int i = 0; i < n; ++i) {
        a[i] *= 2;
    }
}

int row_sum(int m[][3], int row)  /* the column count must be given */
{
    return m[row][0] + m[row][1] + m[row][2];
}

int main(void)
{
    int marks[5] = {60, 75, 90, 45, 80};
    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};

    printf("average = %.1f\n", average(marks, 5));
    double_all(marks, 5);
    printf("after double_all:");
    for (int i = 0; i < 5; ++i) {
        printf(" %d", marks[i]);
    }
    printf("\n");
    printf("average = %.1f\n", average(marks, 5));
    printf("sum of row 1 = %d\n", row_sum(grid, 1));
    return 0;
}
