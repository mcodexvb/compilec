#include <stdio.h>

int main(void)
{
    int score = 72;

    if (score < 0 || score > 100) {
        puts("Invalid score");
    } else if (score >= 75) {
        puts("Distinction");
    } else if (score >= 40) {
        puts("Pass");
    } else {
        puts("Try again");
    }
    return 0;
}
