/* Sample problem 9: Print a multiplication table */
#include <stdio.h>

int main(void)
{
    int n;

    printf("Table of which number? ");
    scanf("%d", &n);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %2d = %3d\n", n, i, n * i);
    }
    return 0;
}
