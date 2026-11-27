/* Sample problem 22: Solve the quadratic equation a x^2 + b x + c = 0 */
#include <stdio.h>
#include <math.h>

int main(void)
{
    double a, b, c;

    printf("Enter a, b and c: ");
    scanf("%lf %lf %lf", &a, &b, &c);

    if (a == 0) {
        if (b == 0) {
            printf(c == 0 ? "Every x is a solution.\n" : "There is no solution.\n");
        } else {
            printf("Linear equation: x = %.4f\n", -c / b);
        }
        return 0;
    }

    double d = b * b - 4 * a * c;            /* the discriminant */
    printf("Discriminant = %.4f\n", d);
    if (d > 0) {
        double r = sqrt(d);
        printf("Two real roots: %.4f and %.4f\n", (-b + r) / (2 * a), (-b - r) / (2 * a));
    } else if (d == 0) {
        printf("Two equal roots: %.4f\n", -b / (2 * a));
    } else {
        double re = -b / (2 * a), im = sqrt(-d) / (2 * a);
        printf("Complex roots: %.4f + %.4fi and %.4f - %.4fi\n", re, fabs(im), re, fabs(im));
    }
    return 0;
}
