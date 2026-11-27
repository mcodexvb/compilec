#include <stdio.h>
#include <math.h>

int scale = 10;                 /* global: visible in the functions below */

double square(double x)
{
    return x * x;
}

double hypotenuse(double a, double b)    /* one function calling another */
{
    return sqrt(square(a) + square(b));
}

void try_to_change(int x)
{
    x = x + 1;                          /* changes only the copy */
    printf("inside the function: x = %d\n", x);
}

int next_id(void)
{
    static int id = 0;                  /* keeps its value between calls */
    id = id + 1;
    return id;
}

int main(void)
{
    int x = 5;
    try_to_change(x);
    printf("back in main: x = %d\n", x);

    {
        int x = 99;                     /* a new x, hiding the outer one */
        printf("inner block: x = %d\n", x);
    }
    printf("outer block: x = %d, scale = %d\n", x, scale);

    printf("hypotenuse(3, 4) = %.1f\n", hypotenuse(3, 4));
    int first = next_id();
    int second = next_id();
    int third = next_id();
    printf("ids: %d %d %d\n", first, second, third);
    return 0;
}
