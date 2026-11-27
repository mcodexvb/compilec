/* Sample problem 24: Shortest distance between two straight lines in space.
   Line 1: r = p + t u      Line 2: r = q + s v
   n = u x v.  If n = 0 the lines are parallel,
   otherwise d = |(q - p).n| / |n|. */
#include <stdio.h>
#include <math.h>

typedef struct { double x, y, z; } Vec;

Vec sub(Vec a, Vec b)
{
    return (Vec){a.x - b.x, a.y - b.y, a.z - b.z};
}

Vec cross(Vec a, Vec b)
{
    return (Vec){a.y * b.z - a.z * b.y,
                 a.z * b.x - a.x * b.z,
                 a.x * b.y - a.y * b.x};
}

double dot(Vec a, Vec b)
{
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

double length(Vec a)
{
    return sqrt(dot(a, a));
}

int main(void)
{
    Vec p, u, q, v;
    const double eps = 1e-9;

    printf("Point p and direction u of line 1 (6 numbers): ");
    scanf("%lf %lf %lf %lf %lf %lf", &p.x, &p.y, &p.z, &u.x, &u.y, &u.z);
    printf("Point q and direction v of line 2 (6 numbers): ");
    scanf("%lf %lf %lf %lf %lf %lf", &q.x, &q.y, &q.z, &v.x, &v.y, &v.z);

    Vec n = cross(u, v);
    Vec pq = sub(q, p);

    if (length(n) < eps) {
        double d = length(cross(pq, u)) / length(u);
        printf("The lines are parallel. Distance = %.6f\n", d);
    } else {
        double d = fabs(dot(pq, n)) / length(n);
        if (d < eps) {
            printf("The lines intersect. Distance = 0\n");
        } else {
            printf("The lines are skew. Shortest distance = %.6f\n", d);
        }
    }
    return 0;
}
