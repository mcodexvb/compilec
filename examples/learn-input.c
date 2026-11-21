#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int number;

    printf("Enter a whole number: ");
    fflush(stdout);
    if (scanf("%3d", &number) != 1) {
        printf("Please enter a whole number.\n");
        return EXIT_FAILURE;
    }

    printf("You entered %d\n", number);
    return 0;
}
