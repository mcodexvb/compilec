/* Writes a table of values to table.csv, then prints it.
   table.csv appears under Output, where you can download it or plot it. */
#include <stdio.h>
#include <math.h>

int main(void)
{
    int i, n = 40;
    double pi = 3.14159265358979323846;
    FILE *f = fopen("table.csv", "w");

    fprintf(f, "x,sin,cos\n");
    for (i = 0; i <= n; i++) {
        double x = 2.0 * pi * i / n;
        fprintf(f, "%.5f,%.5f,%.5f\n", x, sin(x), cos(x));
    }
    fclose(f);
    printf("Wrote %d rows to table.csv\n", n + 1);
    return 0;
}
