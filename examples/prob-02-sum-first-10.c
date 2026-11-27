/* Sample problem 2: Sum of the first 10 natural numbers */
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("1 + 2 + ... + 10 = %d\n", sum);
    printf("Check with n(n+1)/2 = %d\n", 10 * 11 / 2);
    return 0;
}
