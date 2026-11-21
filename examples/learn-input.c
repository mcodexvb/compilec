#include <ctype.h>
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    char line[32];
    fputs("Enter a whole number: ", stdout);
    fflush(stdout);
    if (fgets(line, sizeof line, stdin) == NULL || !strchr(line, '\n')) {
        fputs("Enter a complete line of at most 30 bytes.\n", stderr);
        return EXIT_FAILURE;
    }

    char *end;
    errno = 0;
    long value = strtol(line, &end, 10);
    if (end == line || errno == ERANGE) {
        fputs("Expected a whole number within range.\n", stderr);
        return EXIT_FAILURE;
    }
    while (isspace((unsigned char)*end)) {
        ++end;
    }
    if (*end != '\0') {
        fputs("Unexpected characters after the number.\n", stderr);
        return EXIT_FAILURE;
    }

    printf("You entered %ld\n", value);
    return EXIT_SUCCESS;
}
