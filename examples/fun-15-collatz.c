/* The 3n + 1 problem (Collatz). Start with any positive integer. If it is even,
   halve it; if it is odd, triple it and add 1. Repeat. Everyone who has tried
   has found that the sequence reaches 1, yet no one has been able to prove that
   it always does. */
#include <stdio.h>

static int steps(long long n, long long *peak)
{
    int s = 0;
    *peak = n;
    while (n != 1) {
        n = (n % 2 == 0) ? n / 2 : 3 * n + 1;
        if (n > *peak) *peak = n;
        s++;
    }
    return s;
}

int main(void)
{
    long long peak, n = 27;

    printf("The sequence starting at 27:\n");
    for (int k = 0; n != 1; k++) {
        printf("%lld ", n);
        if ((k + 1) % 12 == 0) putchar('\n');
        n = (n % 2 == 0) ? n / 2 : 3 * n + 1;
    }
    printf("1\n");
    int s27 = steps(27, &peak);
    printf("It takes %d steps and climbs as high as %lld.\n\n", s27, peak);

    int best = 1, best_steps = 0;
    for (int start = 1; start < 100000; start++) {
        int s = steps(start, &peak);
        if (s > best_steps) { best_steps = s; best = start; }
    }
    printf("Below 100000 the longest sequence starts at %d (%d steps).\n", best, best_steps);
    return 0;
}
