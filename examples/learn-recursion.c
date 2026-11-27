#include <stdio.h>

int factorial(int n, int depth)
{
    printf("%*sfactorial(%d) called\n", 2 * depth, "", n);
    int result = (n <= 1) ? 1 : n * factorial(n - 1, depth + 1);
    printf("%*sfactorial(%d) returns %d\n", 2 * depth, "", n, result);
    return result;
}

int gcd(int a, int b)
{
    return b == 0 ? a : gcd(b, a % b);
}

int fib(int n)
{
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

int digit_sum(int n)
{
    return n == 0 ? 0 : n % 10 + digit_sum(n / 10);
}

int main(void)
{
    printf("Result: %d\n\n", factorial(3, 0));
    printf("gcd(48, 18) = %d\n", gcd(48, 18));
    printf("fib(10) = %d\n", fib(10));
    printf("digit_sum(2025) = %d\n", digit_sum(2025));
    return 0;
}
