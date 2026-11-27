/* Sample problem 18: Check whether a number is prime */
#include <stdio.h>

int is_prime(int n)
{
    if (n < 2)
        return 0;
    for (int d = 2; d * d <= n; d++)      /* a divisor above sqrt(n) has a smaller partner */
        if (n % d == 0)
            return 0;
    return 1;
}

int main(void)
{
    int n;

    printf("Enter an integer: ");
    scanf("%d", &n);
    if (is_prime(n)) {
        printf("%d is a prime number.\n", n);
    } else {
        printf("%d is not a prime number.\n", n);
    }

    printf("\nPrimes up to 50:");
    for (int k = 2; k <= 50; k++)
        if (is_prime(k))
            printf(" %d", k);
    printf("\n");
    return 0;
}
