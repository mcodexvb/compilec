/* Sample problem 12: Read an array of names and sort them alphabetically */
#include <stdio.h>
#include <string.h>

int main(void)
{
    int n;
    char name[50][30];                     /* up to 50 names of up to 29 letters */

    printf("How many names? ");
    scanf("%d", &n);
    printf("Enter the names: ");
    for (int i = 0; i < n; i++) {
        scanf("%29s", name[i]);
    }

    for (int pass = 1; pass < n; pass++) {
        for (int i = 0; i < n - pass; i++) {
            if (strcmp(name[i], name[i + 1]) > 0) {
                char temp[30];
                strcpy(temp, name[i]);
                strcpy(name[i], name[i + 1]);
                strcpy(name[i + 1], temp);
            }
        }
    }

    printf("In alphabetical order:\n");
    for (int i = 0; i < n; i++) {
        printf("%2d. %s\n", i + 1, name[i]);
    }
    return 0;
}
