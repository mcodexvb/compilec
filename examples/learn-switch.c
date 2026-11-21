#include <stdio.h>

int main(void)
{
    char choice = 'm';

    switch (choice) {
    case 's':
        printf("Sum\n");
        break;
    case 'm':
        printf("Mean\n");
        break;
    default:
        printf("Unknown choice\n");
        break;
    }
    return 0;
}
