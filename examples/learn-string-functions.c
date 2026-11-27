#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[20] = "Victoria";
    char second[20];

    strcpy(second, first);
    strcat(second, " College");
    printf("first  = \"%s\" (%zu letters)\n", first, strlen(first));
    printf("second = \"%s\" (%zu letters)\n", second, strlen(second));

    if (strcmp("apple", "banana") < 0) {
        printf("\"apple\" comes before \"banana\"\n");
    }
    printf("strcmp of equal strings is %d\n", strcmp("same", "same"));

    char *where = strchr(second, 'C');
    printf("The first C is at index %ld\n", (long)(where - second));
    return 0;
}
