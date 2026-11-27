/* Sample problem 25: Investment report with compound interest
   Balance after t years = P (1 + r/m)^(m t),
   where m is the number of compounding periods per year. */
#include <stdio.h>
#include <math.h>

int main(void)
{
    double principal, rate;
    int years, m;

    printf("Principal, annual rate (%%), years, compounding periods per year: ");
    scanf("%lf %lf %d %d", &principal, &rate, &years, &m);

    printf("\nInvestment report\n");
    printf("%-6s %14s %14s %14s\n", "Year", "Opening", "Interest", "Closing");
    printf("------ -------------- -------------- --------------\n");

    double balance = principal;
    for (int y = 1; y <= years; y++) {
        double closing = principal * pow(1 + rate / 100 / m, m * y);
        printf("%-6d %14.2f %14.2f %14.2f\n", y, balance, closing - balance, closing);
        balance = closing;
    }

    double effective = pow(1 + rate / 100 / m, m) - 1;
    printf("\nTotal interest earned : %.2f\n", balance - principal);
    printf("Effective annual rate : %.4f%%\n", effective * 100);
    return 0;
}
