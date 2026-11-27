/* The computer guesses YOUR number. Think of a whole number from 1 to 100 and
   answer each guess with h (my number is higher), l (lower) or c (correct).
   Halving the range every time finds any number in at most 7 guesses. */
#include <stdio.h>

int main(void)
{
    int low = 1, high = 100, guesses = 0;
    char answer;

    printf("Think of a number from 1 to 100.\n");
    while (low <= high) {
        int guess = (low + high) / 2;
        guesses++;
        printf("Guess %d: is it %d?  (h = higher, l = lower, c = correct) ", guesses, guess);
        if (scanf(" %c", &answer) != 1)
            return 1;
        if (answer == 'c') {
            printf("Found it in %d guesses!\n", guesses);
            return 0;
        }
        if (answer == 'h')
            low = guess + 1;
        else if (answer == 'l')
            high = guess - 1;
        else {
            printf("Please answer h, l or c.\n");
            guesses--;
        }
    }
    printf("Hmm, the answers contradict each other.\n");
    return 0;
}
