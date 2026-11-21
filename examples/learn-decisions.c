#include <stdio.h>

int main(void)
{
    int score = 72;

    if (score < 0 || score > 100) {
        printf("Invalid score\n");
    } else if (score >= 75) {
        printf("Distinction\n");
    } else if (score >= 40) {
        printf("Pass\n");
    } else {
        printf("Try again\n");
    }
    return 0;
}
