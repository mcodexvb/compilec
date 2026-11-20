/* Reading a file and writing a file.
   Reads numbers from data.txt (add it under Files), then writes statistics to results.txt.
   The written file appears under Output, where you can view or download it. */
#include <stdio.h>

int main(void)
{
    FILE *in = fopen("data.txt", "r");
    double x, sum = 0.0, min = 0.0, max = 0.0;
    int n = 0;

    if (in == NULL) {
        printf("Could not open data.txt. Add it under Files first.\n");
        return 1;
    }
    while (fscanf(in, "%lf", &x) == 1) {
        if (n == 0 || x < min) min = x;
        if (n == 0 || x > max) max = x;
        sum += x;
        n++;
    }
    fclose(in);
    if (n == 0) {
        printf("data.txt contains no numbers.\n");
        return 1;
    }

    FILE *out = fopen("results.txt", "w");
    fprintf(out, "count %d\n", n);
    fprintf(out, "sum   %.4f\n", sum);
    fprintf(out, "mean  %.4f\n", sum / n);
    fprintf(out, "min   %.4f\n", min);
    fprintf(out, "max   %.4f\n", max);
    fclose(out);

    printf("Read %d numbers from data.txt and wrote results.txt\n", n);
    return 0;
}
