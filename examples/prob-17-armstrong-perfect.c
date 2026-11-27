/* Sample problem 17: Armstrong and perfect numbers
   Armstrong: the digits, each raised to the number of digits, add up to the
              number itself (153 = 1^3 + 5^3 + 3^3)
   Perfect  : the proper divisors add up to the number (28 = 1 + 2 + 4 + 7 + 14) */
#include <stdio.h>

int is_armstrong(int n)
{
    int digits = 0, sum = 0;

    for (int m = n; m > 0; m /= 10)
        digits++;
    for (int m = n; m > 0; m /= 10) {
        int power = 1;
        for (int k = 0; k < digits; k++)
            power *= m % 10;              /* (last digit)^digits */
        sum += power;
    }
    return sum == n;
}

int is_perfect(int n)
{
    int sum = 0;

    for (int d = 1; d < n; d++)
        if (n % d == 0)
            sum += d;
    return n > 1 && sum == n;
}

int main(void)
{
    int n;

    printf("Enter a positive integer: ");
    scanf("%d", &n);
    printf("%d is %san Armstrong number.\n", n, is_armstrong(n) ? "" : "not ");
    printf("%d is %sa perfect number.\n", n, is_perfect(n) ? "" : "not ");

    printf("\nArmstrong numbers below 1000:");
    for (int k = 1; k < 1000; k++)
        if (is_armstrong(k))
            printf(" %d", k);
    printf("\nPerfect numbers below 10000:");
    for (int k = 1; k < 10000; k++)
        if (is_perfect(k))
            printf(" %d", k);
    printf("\n");
    return 0;
}
