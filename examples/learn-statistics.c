#include <stdio.h>

struct Summary {
    double min;
    double max;
    double mean;
};

static struct Summary summarize(const double values[], size_t count)
{
    struct Summary result = {.min = values[0], .max = values[0]};
    double total = 0.0;
    for (size_t i = 0; i < count; ++i) {
        double value = values[i];
        if (value < result.min) {
            result.min = value;
        }
        if (value > result.max) {
            result.max = value;
        }
        total += value;
    }
    result.mean = total / count;
    return result;
}

int main(void)
{
    const double values[] = {2.0, 6.0, 3.0, 5.0};
    struct Summary result = summarize(values, sizeof values / sizeof values[0]);

    printf("Minimum: %.2f\n", result.min);
    printf("Maximum: %.2f\n", result.max);
    printf("Mean: %.2f\n", result.mean);
    return 0;
}
