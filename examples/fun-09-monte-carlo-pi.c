/* Estimating pi by throwing darts.
   Throw random points into the unit square. The fraction that falls inside the
   quarter circle x*x + y*y <= 1 is about pi/4, so  pi ~ 4 * (hits / throws).
   The error shrinks like 1/sqrt(n): a hundred times more darts gives only one
   more correct digit. The random numbers come from a generator with a fixed
   seed, so every run prints the same table. */
#include <stdio.h>

static unsigned long long state = 2026ULL;

static double uniform(void)                      /* a number in [0, 1) */
{
    state = state * 6364136223846793005ULL + 1442695040888963407ULL;
    return (double)(state >> 11) / 9007199254740992.0;
}

int main(void)
{
    const double pi = 3.14159265358979323846;
    long hits = 0, throws = 0;

    printf("%10s %12s %10s\n", "throws", "estimate", "error");
    for (long target = 100; target <= 10000000L; target *= 10) {
        for (; throws < target; throws++) {
            double x = uniform(), y = uniform();
            if (x * x + y * y <= 1.0)
                hits++;
        }
        double est = 4.0 * hits / throws;
        printf("%10ld %12.6f %10.6f\n", throws, est, est > pi ? est - pi : pi - est);
    }
    return 0;
}
