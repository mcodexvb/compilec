/* Sample problem 7: Is a box a cube, a rectangular or a semi-rectangular box?
   cube             : length = width = height
   semi-rectangular : exactly two of the three are equal
   rectangular      : all three are different */
#include <stdio.h>

int main(void)
{
    double length, width, height;

    printf("Enter length, width and height: ");
    scanf("%lf %lf %lf", &length, &width, &height);

    if (length == width && width == height) {
        printf("The box is a cube.\n");
    } else if (length == width || width == height || length == height) {
        printf("The box is semi-rectangular (two sides are equal).\n");
    } else {
        printf("The box is rectangular (all sides differ).\n");
    }
    return 0;
}
