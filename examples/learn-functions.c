#include <stdio.h>

static double rectangle_area(double length, double width);

int main(void)
{
    printf("Area: %.2f\n", rectangle_area(4.0, 2.5));
    return 0;
}

static double rectangle_area(double length, double width)
{
    return length * width;
}
