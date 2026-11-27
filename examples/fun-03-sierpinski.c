/* Sierpinski's triangle from Pascal's triangle.
   The binomial coefficient C(y, x) is odd exactly when no binary digit of x is
   set where y - x has a 1 as well, that is when (x & (y - x)) == 0.
   Printing a star for every odd entry draws the fractal. */
#include <stdio.h>

int main(void)
{
    int rows = 32;

    for (int y = 0; y < rows; y++) {
        for (int s = 0; s < rows - 1 - y; s++)
            putchar(' ');
        for (int x = 0; x <= y; x++)
            printf("%s", (x & (y - x)) == 0 ? "* " : "  ");
        putchar('\n');
    }
    return 0;
}
