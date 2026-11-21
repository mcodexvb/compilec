#include <assert.h>
#include <stdio.h>

int main(void)
{
    int sum = 0;
    for (int i = 1; i <= 4; ++i) {
        sum += i;
    }

    assert(sum == 10);
    printf("Sum: %d\n", sum);
    return 0;
}
