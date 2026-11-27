#include <stdio.h>

int main(void)
{
    int n = 3;
    do {
        printf("do-while: n = %d\n", n);
        --n;
    } while (n > 0);

    int c = 5;
    do {
        printf("The body ran once although c < 0 is false (c = %d)\n", c);
    } while (c < 0);

    printf("Skipping multiples of 3:");
    for (int i = 1; i <= 10; ++i) {
        if (i % 3 == 0) {
            continue;
        }
        printf(" %d", i);
    }
    printf("\n");

    for (int i = 51; ; ++i) {
        if (i % 7 == 0) {
            printf("The first multiple of 7 above 50 is %d\n", i);
            break;
        }
    }
    return 0;
}
