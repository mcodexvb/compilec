/* Throw two dice 6000 times and draw a histogram of the totals.
   The bars form a triangle, with 7 the most likely total: there are six ways
   to make 7 but only one way to make 2 or 12. Random numbers come from a
   simple linear congruential generator, so the run is the same every time. */
#include <stdio.h>

static unsigned long state = 12345UL;

static int die(void)
{
    state = (state * 1103515245UL + 12345UL) & 0x7fffffffUL;
    return (int)((state >> 8) % 6) + 1;
}

int main(void)
{
    int count[13] = {0};

    for (int t = 0; t < 6000; t++)
        count[die() + die()]++;

    for (int total = 2; total <= 12; total++) {
        printf("%2d | ", total);
        for (int i = 0; i < count[total] / 10; i++)
            putchar('#');
        printf(" %d\n", count[total]);
    }
    printf("(each # stands for 10 throws; expected for 7: 1000)\n");
    return 0;
}
