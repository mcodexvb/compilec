/* Sample problem 10: Maximum and minimum elements of an array */
#include <stdio.h>

int main(void)
{
    int n, a[100];

    printf("How many elements? ");
    scanf("%d", &n);
    printf("Enter them: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    int max = a[0], min = a[0], max_at = 0, min_at = 0;
    for (int i = 1; i < n; i++) {
        if (a[i] > max) { max = a[i]; max_at = i; }
        if (a[i] < min) { min = a[i]; min_at = i; }
    }
    printf("Maximum = %d (position %d)\n", max, max_at + 1);
    printf("Minimum = %d (position %d)\n", min, min_at + 1);
    return 0;
}
