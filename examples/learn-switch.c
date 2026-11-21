#include <stdio.h>

int main(void)
{
    char choice = 'm';

    switch (choice) {
    case 's':
        puts("Sum");
        break;
    case 'm':
        puts("Mean");
        break;
    default:
        puts("Unknown choice");
        break;
    }
    return 0;
}
