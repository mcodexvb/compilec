/* Sample problem 11: Sort an array in ascending order (bubble sort) */
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

    for (int pass = 1; pass < n; pass++) {          /* after pass k, k elements are in place */
        for (int i = 0; i < n - pass; i++) {
            if (a[i] > a[i + 1]) {
                int temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
            }
        }
    }

    printf("Sorted: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
    return 0;
}
