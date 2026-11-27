/* A Caesar cipher: move every letter a fixed number of places along the
   alphabet. Decoding is the same operation with the opposite shift. */
#include <stdio.h>
#include <ctype.h>

static void shift_text(const char *in, char *out, int shift)
{
    int i;
    for (i = 0; in[i] != '\0'; i++) {
        char c = in[i];
        if (isupper((unsigned char)c))
            c = 'A' + ((c - 'A' + shift) % 26 + 26) % 26;
        else if (islower((unsigned char)c))
            c = 'a' + ((c - 'a' + shift) % 26 + 26) % 26;
        out[i] = c;                                      /* other characters stay as they are */
    }
    out[i] = '\0';
}

int main(void)
{
    char text[200], secret[200], back[200];
    int shift;

    printf("Message: ");
    if (fgets(text, sizeof text, stdin) == NULL)
        return 1;
    printf("Shift: ");
    if (scanf("%d", &shift) != 1)
        return 1;

    shift_text(text, secret, shift);
    shift_text(secret, back, -shift);
    printf("Encoded: %s", secret);
    printf("Decoded: %s", back);
    return 0;
}
