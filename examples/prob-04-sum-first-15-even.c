/* Sample problem 4: Sum of the first 15 even natural numbers */
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int k = 1; k <= 15; k++) {
        int even = 2 * k;          /* the k-th even number */
        sum += even;
        printf("%d ", even);
    }
    printf("\nSum = %d\n", sum);
    printf("Check with n(n+1) = %d\n", 15 * 16);
    return 0;
}
