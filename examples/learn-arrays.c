#include <stdio.h>

int main(void)
{
    int scores[] = {8, 5, 10, 7};
    size_t count = sizeof scores / sizeof scores[0];
    int sum = 0;

    for (size_t i = 0; i < count; ++i) {
        sum += scores[i];
    }
    printf("Mean of %zu scores: %.2f\n", count, (double)sum / count);
    return 0;
}
