/* Conway's Game of Life: a glider walks across a small board.
   A live cell with 2 or 3 live neighbours survives; a dead cell with exactly
   3 live neighbours is born. The board wraps around at the edges. */
#include <stdio.h>
#include <string.h>

#define W 16
#define H 8

static int neighbours(int g[H][W], int r, int c)
{
    int count = 0;
    for (int dr = -1; dr <= 1; dr++)
        for (int dc = -1; dc <= 1; dc++)
            if (dr != 0 || dc != 0)
                count += g[(r + dr + H) % H][(c + dc + W) % W];
    return count;
}

static void show(int g[H][W], int generation)
{
    printf("Generation %d\n", generation);
    for (int r = 0; r < H; r++) {
        for (int c = 0; c < W; c++)
            putchar(g[r][c] ? '#' : '.');
        putchar('\n');
    }
    putchar('\n');
}

int main(void)
{
    int g[H][W] = {{0}}, next[H][W];

    g[0][1] = g[1][2] = g[2][0] = g[2][1] = g[2][2] = 1;      /* the glider */

    for (int gen = 0; gen <= 8; gen++) {
        if (gen % 2 == 0)
            show(g, gen);
        for (int r = 0; r < H; r++)
            for (int c = 0; c < W; c++) {
                int n = neighbours(g, r, c);
                next[r][c] = (n == 3) || (g[r][c] && n == 2);
            }
        memcpy(g, next, sizeof g);
    }
    return 0;
}
