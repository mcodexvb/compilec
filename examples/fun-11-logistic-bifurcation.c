/* The bifurcation diagram of the logistic map x -> r x (1 - x).
   For every r from 2.5 to 4 we iterate the map, discard the first 500 steps and
   record where x lands afterwards. For small r the orbit settles to one value,
   then splits into 2, 4, 8, ... values (period doubling) and finally becomes
   chaotic. Darker characters mean the orbit lands there more often. */
#include <stdio.h>

#define COLS 76
#define ROWS 30

int main(void)
{
    static int hits[ROWS][COLS];
    const char shade[] = " .:+*#";

    for (int c = 0; c < COLS; c++) {
        double r = 2.5 + 1.5 * c / (COLS - 1);
        double x = 0.5;
        for (int i = 0; i < 500; i++)
            x = r * x * (1.0 - x);
        for (int i = 0; i < 400; i++) {
            x = r * x * (1.0 - x);
            int row = (int)((1.0 - x) * (ROWS - 1) + 0.5);
            hits[row][c]++;
        }
    }
    for (int row = 0; row < ROWS; row++) {
        for (int c = 0; c < COLS; c++) {
            int h = hits[row][c];
            putchar(shade[h == 0 ? 0 : h < 3 ? 1 : h < 10 ? 2 : h < 40 ? 3 : h < 120 ? 4 : 5]);
        }
        putchar('\n');
    }
    printf("r = 2.5 %*s r = 4.0\n", COLS - 15, "");
    return 0;
}
