/* Sample problem 20: Approximate value of pi from two series.
   Leibniz   : pi/4 = 1 - 1/3 + 1/5 - 1/7 + ...                 (very slow)
   Nilakantha: pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - ... (much faster) */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int n;
    double leibniz = 0.0, nilakantha = 3.0, sign = 1.0;
    const double pi = acos(-1.0);

    printf("Number of terms: ");
    scanf("%d", &n);

    for (int k = 0; k < n; k++) {
        leibniz += sign / (2 * k + 1);
        sign = -sign;
    }
    leibniz *= 4;

    sign = 1.0;
    for (int k = 1; k <= n; k++) {
        double a = 2.0 * k;
        nilakantha += sign * 4.0 / (a * (a + 1) * (a + 2));
        sign = -sign;
    }

    printf("Leibniz    : %.10f  (error %.2e)\n", leibniz, fabs(leibniz - pi));
    printf("Nilakantha : %.10f  (error %.2e)\n", nilakantha, fabs(nilakantha - pi));
    printf("True value : %.10f\n", pi);
    return 0;
}
