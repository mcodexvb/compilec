/* Sample problem 16: Check whether two strings are anagrams.
   Letters are compared ignoring case, spaces and punctuation. */
#include <stdio.h>
#include <ctype.h>

int main(void)
{
    char s1[100], s2[100];
    int count[26] = {0};          /* count[0] is for 'a', count[25] for 'z' */

    printf("First string : ");
    fgets(s1, sizeof s1, stdin);
    printf("Second string: ");
    fgets(s2, sizeof s2, stdin);

    for (int i = 0; s1[i] != '\0'; i++)
        if (isalpha((unsigned char)s1[i]))
            count[tolower((unsigned char)s1[i]) - 'a']++;  /* add the letters of s1 */
    for (int i = 0; s2[i] != '\0'; i++)
        if (isalpha((unsigned char)s2[i]))
            count[tolower((unsigned char)s2[i]) - 'a']--;  /* remove the letters of s2 */

    int anagram = 1;
    for (int k = 0; k < 26; k++)
        if (count[k] != 0)
            anagram = 0;                  /* some letter is left over */

    printf(anagram ? "They are anagrams.\n" : "They are not anagrams.\n");
    return 0;
}
