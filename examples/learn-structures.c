#include <stdio.h>

struct Point {
    double x;
    double y;
};

static void translate(struct Point *point, double dx, double dy)
{
    point->x += dx;
    point->y += dy;
}

int main(void)
{
    struct Point p = {.x = 2.0, .y = 3.0};
    translate(&p, 1.5, -1.0);
    printf("(%.1f, %.1f)\n", p.x, p.y);
    return 0;
}
