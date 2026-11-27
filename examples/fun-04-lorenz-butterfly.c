/* The Lorenz butterfly drawn in text.
   dx/dt = 10 (y - x),  dy/dt = x (28 - z) - y,  dz/dt = x y - (8/3) z.
   The system is integrated with the fourth-order Runge-Kutta method and the
   orbit is plotted in the (x, z) plane; a darker character means the orbit
   visited that cell more often. */
#include <stdio.h>

#define COLS 76
#define ROWS 34

static void f(const double p[3], double d[3])
{
    d[0] = 10.0 * (p[1] - p[0]);
    d[1] = p[0] * (28.0 - p[2]) - p[1];
    d[2] = p[0] * p[1] - 8.0 / 3.0 * p[2];
}

static void rk4(double p[3], double h)
{
    double k1[3], k2[3], k3[3], k4[3], t[3];
    f(p, k1);
    for (int i = 0; i < 3; i++) t[i] = p[i] + 0.5 * h * k1[i];
    f(t, k2);
    for (int i = 0; i < 3; i++) t[i] = p[i] + 0.5 * h * k2[i];
    f(t, k3);
    for (int i = 0; i < 3; i++) t[i] = p[i] + h * k3[i];
    f(t, k4);
    for (int i = 0; i < 3; i++) p[i] += h / 6.0 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
}

int main(void)
{
    static int hits[ROWS][COLS];
    double p[3] = {1.0, 1.0, 1.0};
    const char shade[] = " .:+*#";

    for (long step = 0; step < 60000; step++) {
        rk4(p, 0.005);
        if (step < 2000) continue;                            /* let the orbit settle */
        int c = (int)((p[0] + 22.0) / 44.0 * (COLS - 1));
        int r = (int)((50.0 - p[2]) / 50.0 * (ROWS - 1));
        if (c >= 0 && c < COLS && r >= 0 && r < ROWS)
            hits[r][c]++;
    }
    for (int r = 0; r < ROWS; r++) {
        for (int c = 0; c < COLS; c++) {
            int h = hits[r][c], level = h == 0 ? 0 : h < 15 ? 1 : h < 40 ? 2 : h < 90 ? 3 : h < 200 ? 4 : 5;
            putchar(shade[level]);
        }
        putchar('\n');
    }
    return 0;
}
