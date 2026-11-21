#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    const size_t count = 4;
    int *values = malloc(count * sizeof *values);
    if (values == NULL) {
        fputs("Allocation failed.\n", stderr);
        return EXIT_FAILURE;
    }

    for (size_t i = 0; i < count; ++i) {
        values[i] = (int)i * 10;
    }
    printf("Last value: %d\n", values[count - 1]);

    free(values);
    return EXIT_SUCCESS;
}
