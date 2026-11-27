/* Sample problem 6: Pyramid of numbers, each one larger than the last by 1 */
#include <stdio.h>

int main(void)
{
    int rows, next = 1;

    printf("Number of rows: ");
    scanf("%d", &rows);

    for (int r = 1; r <= rows; r++) {
        for (int s = 0; s < rows - r; s++) {
            printf("  ");                 /* half a number-width of space */
        }
        for (int k = 1; k <= r; k++) {
            printf("%4d", next);
            next++;
        }
        printf("\n");
    }
    return 0;
}
