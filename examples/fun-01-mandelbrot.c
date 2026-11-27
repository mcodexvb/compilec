/* The Mandelbrot set, drawn with text.
   For each point c = x + iy we repeat z = z*z + c, starting from z = 0.
   If z stays bounded the point belongs to the set; otherwise the number of steps
   before |z| exceeds 2 decides which character is printed. */
#include <stdio.h>

int main(void)
{
    const char shade[] = " .:-=+*#%@";           /* darker = stayed longer */
    const int max_iter = 60;

    for (int row = 0; row < 24; row++) {
        for (int col = 0; col < 72; col++) {
            double cx = -2.2 + 3.2 * col / 72.0;
            double cy = -1.2 + 2.4 * row / 24.0;
            double x = 0.0, y = 0.0;
            int n = 0;

            while (x * x + y * y <= 4.0 && n < max_iter) {
                double t = x * x - y * y + cx;   /* real part of z*z + c */
                y = 2.0 * x * y + cy;            /* imaginary part */
                x = t;
                n++;
            }
            putchar(n == max_iter ? '@' : shade[n % 9]);
        }
        putchar('\n');
    }
    return 0;
}
