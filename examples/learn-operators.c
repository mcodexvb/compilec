#include <stdio.h>

int main(void)
{
    int total = 17;
    int groups = 5;

    printf("Cookies each: %d\n", total / groups);
    printf("Cookies left: %d\n", total % groups);
    printf("Exact share: %.2f\n", (double)total / groups);
    return 0;
}
