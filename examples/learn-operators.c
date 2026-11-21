#include <stdio.h>

int main(void)
{
    int total = 17;
    int groups = 5;

    printf("Whole quotient: %d\n", total / groups);
    printf("Remainder: %d\n", total % groups);
    printf("Mean: %.2f\n", (double)total / groups);
    return 0;
}
