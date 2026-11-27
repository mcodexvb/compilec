/* The Ulam spiral. Write 1, 2, 3, ... in a square spiral and mark the primes.
   Stanislaw Ulam noticed during a boring meeting that the primes line up along
   diagonals, and no one has fully explained all of the pattern. */
#include <stdio.h>

#define N 39

static int is_prime(int n)
{
    if (n < 2) return 0;
    for (int d = 2; d * d <= n; d++)
        if (n % d == 0) return 0;
    return 1;
}

int main(void)
{
    static char grid[N][N];
    int x = N / 2, y = N / 2;                          /* start at the centre */
    int dx = 1, dy = 0, run = 1, done_in_run = 0, turns = 0;

    for (int k = 1; k <= N * N; k++) {
        grid[y][x] = is_prime(k);
        x += dx; y += dy;
        if (++done_in_run == run) {                    /* time to turn left */
            done_in_run = 0;
            int t = dx; dx = dy; dy = -t;
            if (++turns % 2 == 0) run++;               /* every second turn the run grows */
        }
        if (x < 0 || x >= N || y < 0 || y >= N) break;
    }
    for (int r = 0; r < N; r++) {
        for (int c = 0; c < N; c++)
            fputs(grid[r][c] ? "# " : ". ", stdout);
        putchar('\n');
    }
    return 0;
}
