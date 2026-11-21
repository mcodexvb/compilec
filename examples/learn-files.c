#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    FILE *file = fopen("greeting.txt", "r");
    if (file == NULL) {
        perror("greeting.txt");
        return EXIT_FAILURE;
    }

    char buffer[64];
    while (fgets(buffer, sizeof buffer, file) != NULL) {
        fputs(buffer, stdout);
    }

    int failed = ferror(file);
    if (fclose(file) == EOF || failed) {
        fputs("Could not read and close the file successfully.\n", stderr);
        return EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}
