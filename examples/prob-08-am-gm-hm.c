/* Sample problem 8: Arithmetic, geometric and harmonic means of numbers */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int n;
    double x[100], sum = 0.0, sum_log = 0.0, sum_inv = 0.0;

    printf("How many positive numbers? ");
    scanf("%d", &n);
    printf("Enter the numbers: ");
    for (int i = 0; i < n; i++) {
        scanf("%lf", &x[i]);
        sum += x[i];
        sum_log += log(x[i]);          /* GM through logs avoids overflow */
        sum_inv += 1.0 / x[i];
    }

    double am = sum / n;
    double gm = exp(sum_log / n);
    double hm = n / sum_inv;
    printf("AM = %.4f\nGM = %.4f\nHM = %.4f\n", am, gm, hm);
    printf("AM >= GM >= HM : %s\n", (am >= gm && gm >= hm) ? "true" : "false");
    return 0;
}
