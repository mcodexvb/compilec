/* Sample problem 5: Factorial of a number using recursion */
#include <stdio.h>

unsigned long long factorial(int n)
{
    if (n <= 1) {
        return 1;                       /* base case: 0! = 1! = 1 */
    }
    return n * factorial(n - 1);        /* n! = n * (n-1)! */
}

int main(void)
{
    int n;

    printf("Enter n (0 to 20): ");
    if (scanf("%d", &n) != 1 || n < 0 || n > 20) {
        printf("n must be a whole number from 0 to 20.\n");
        return 1;
    }
    printf("%d! = %llu\n", n, factorial(n));
    return 0;
}
