#include <stdio.h>
#include <string.h>

int main(void)
{
    char word[10] = "cat";

    word[0] = 'b';
    printf("%s\n", word);
    printf("Length: %zu, capacity: %zu\n", strlen(word), sizeof word);
    return 0;
}
