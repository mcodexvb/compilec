/* Euler's method for y' = y, y(0) = 1, compared with the exact solution e^x.
   The program prints a table comparing the two. */
#include <stdio.h>
#include <math.h>

int main(void)
{
    double h, x = 0.0, y = 1.0;
    int steps, i;

    printf("Enter the step size h and the number of steps: ");
    scanf("%lf %d", &h, &steps);

    printf("\nx euler exact\n");
    for (i = 0; i <= steps; i++) {
        printf("%.4f %.6f %.6f\n", x, y, exp(x));
        y = y + h * y;
        x = x + h;
    }
    return 0;
}
