/* Predators and prey: the Lotka-Volterra equations
       dx/dt = x (1 - y)        (prey x grow, and are eaten at rate x y)
       dy/dt = y (x - 1) / 2    (predators y grow by eating, and die out otherwise)
   Every orbit is a closed loop around the point (1, 1): the two populations
   rise and fall in turn for ever. Three different starting values give three
   nested loops, drawn here with the characters  .  o  and  #; the + marks the
   equilibrium point (1, 1). */
#include <stdio.h>

#define COLS 70
#define ROWS 26

static void f(const double p[2], double d[2])
{
    d[0] = p[0] * (1.0 - p[1]);
    d[1] = 0.5 * p[1] * (p[0] - 1.0);
}

static void rk4(double p[2], double h)
{
    double k1[2], k2[2], k3[2], k4[2], t[2];
    f(p, k1);
    for (int i = 0; i < 2; i++) t[i] = p[i] + 0.5 * h * k1[i];
    f(t, k2);
    for (int i = 0; i < 2; i++) t[i] = p[i] + 0.5 * h * k2[i];
    f(t, k3);
    for (int i = 0; i < 2; i++) t[i] = p[i] + h * k3[i];
    f(t, k4);
    for (int i = 0; i < 2; i++) p[i] += h / 6.0 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
}

int main(void)
{
    char grid[ROWS][COLS + 1];
    const double start[3][2] = {{1.0, 1.25}, {1.0, 1.7}, {1.0, 2.3}};
    const char mark[3] = {'.', 'o', '#'};

    for (int r = 0; r < ROWS; r++) {
        for (int c = 0; c < COLS; c++)
            grid[r][c] = ' ';
        grid[r][COLS] = '\0';
    }
    for (int k = 0; k < 3; k++) {
        double p[2] = {start[k][0], start[k][1]};
        for (int step = 0; step < 6000; step++) {
            rk4(p, 0.005);
            int c = (int)(p[0] / 3.3 * (COLS - 1) + 0.5);
            int r = (int)((1.0 - p[1] / 2.5) * (ROWS - 1) + 0.5);
            if (c >= 0 && c < COLS && r >= 0 && r < ROWS)
                grid[r][c] = mark[k];
        }
    }
    grid[(int)((1.0 - 1.0 / 2.5) * (ROWS - 1) + 0.5)][(int)(1.0 / 3.3 * (COLS - 1) + 0.5)] = '+';   /* the equilibrium (1, 1) */
    printf("predators y  (vertical)   against   prey x  (horizontal)\n");
    for (int r = 0; r < ROWS; r++)
        puts(grid[r]);
    return 0;
}
