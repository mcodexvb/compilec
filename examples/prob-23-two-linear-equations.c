/* Sample problem 23: Solve a1 x + b1 y = c1 and a2 x + b2 y = c2
   by Cramer's rule */
#include <stdio.h>
#include <math.h>

int main(void)
{
    double a1, b1, c1, a2, b2, c2;

    printf("Enter a1 b1 c1: ");
    scanf("%lf %lf %lf", &a1, &b1, &c1);
    printf("Enter a2 b2 c2: ");
    scanf("%lf %lf %lf", &a2, &b2, &c2);

    double d  = a1 * b2 - a2 * b1;
    double dx = c1 * b2 - c2 * b1;
    double dy = a1 * c2 - a2 * c1;

    if (fabs(d) > 1e-12) {
        printf("Unique solution: x = %.4f, y = %.4f\n", dx / d, dy / d);
    } else if (fabs(dx) < 1e-12 && fabs(dy) < 1e-12) {
        printf("The lines coincide: infinitely many solutions.\n");
    } else {
        printf("The lines are parallel: no solution.\n");
    }
    return 0;
}
