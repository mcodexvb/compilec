#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    printf("stdio.h : printf and scanf are the pair you already know\n");

    printf("math.h  : sqrt(144) = %.0f, ", sqrt(144.0));
    printf("pow(2, 10) = %.0f, ", pow(2.0, 10.0));
    printf("fabs(-2.5) = %.1f\n", fabs(-2.5));
    printf("          floor(3.7) = %.0f, ceil(3.2) = %.0f\n", floor(3.7), ceil(3.2));

    printf("string.h: strlen(\"library\") = %zu\n", strlen("library"));

    printf("stdlib.h: atoi(\"1234\") + 1 = %d, ", atoi("1234") + 1);
    printf("abs(-9) = %d\n", abs(-9));
    srand(2026);
    int all_in_range = 1;
    for (int i = 0; i < 100; ++i) {
        int roll = rand() % 6 + 1;
        if (roll < 1 || roll > 6) {
            all_in_range = 0;
        }
    }
    printf("          100 dice rolls in 1..6: %s\n", all_in_range ? "yes" : "no");

    struct tm day = {0};
    char text[64];
    day.tm_year = 2026 - 1900;
    day.tm_mon = 10;
    day.tm_mday = 27;
    mktime(&day);
    strftime(text, sizeof text, "%A", &day);
    printf("time.h  : 27 November 2026 is a %s\n", text);
    printf("          time(NULL) is positive: %s\n", time(NULL) > 0 ? "yes" : "no");
    return 0;
}
