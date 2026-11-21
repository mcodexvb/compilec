#include <stdio.h>

static void swap(int *a, int *b)
{
    int temporary = *a;
    *a = *b;
    *b = temporary;
}

int main(void)
{
    int left = 12;
    int right = 7;
    swap(&left, &right);
    printf("%d %d\n", left, right);
    return 0;
}
