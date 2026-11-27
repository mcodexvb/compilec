/* The first 100 digits of pi (the 3 and 99 decimals), using only integer arithmetic.
   This is the spigot algorithm of Rabinowitz and Wagon, which writes
       pi = 2 + 1/3 (2 + 2/5 (2 + 3/7 (2 + ...)))
   in a mixed-radix system and produces the decimal digits one at a time.
   There is no floating point at all: a double could never hold 100 digits. */
#include <stdio.h>

#define DIGITS 100
#define LEN (10 * DIGITS / 3 + 1)

static int emitted = 0;

static void emit(int d)                               /* print a digit; a point follows the first */
{
    putchar('0' + d);
    if (++emitted == 1)
        putchar('.');
}

int main(void)
{
    static int a[LEN];
    int nines = 0, predigit = 0, first = 1;

    for (int i = 0; i < LEN; i++)
        a[i] = 2;

    for (int j = 0; j < DIGITS + 1; j++) {
        int q = 0;
        for (int i = LEN; i > 0; i--) {
            int x = 10 * a[i - 1] + q * i;
            a[i - 1] = x % (2 * i - 1);
            q = x / (2 * i - 1);
        }
        a[0] = q % 10;
        q /= 10;
        if (q == 9) {
            nines++;
        } else if (q == 10) {                         /* a carry: fix the digits already waiting */
            emit(predigit + 1);
            for (; nines > 0; nines--) emit(0);
            predigit = 0;
        } else {
            if (!first) emit(predigit);
            first = 0;
            predigit = q;
            for (; nines > 0; nines--) emit(9);
        }
    }
    emit(predigit);
    putchar('\n');
    return 0;
}
