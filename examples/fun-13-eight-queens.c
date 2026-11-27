/* The eight queens puzzle: place 8 queens on a chessboard so that none attacks
   another. The program tries the rows one after another (backtracking): if a
   row has no safe square, it goes back and moves the previous queen. */
#include <stdio.h>

#define N 8

static int col_of[N];                      /* col_of[r] = column of the queen in row r */
static int solutions = 0;

static int safe(int r, int c)
{
    for (int i = 0; i < r; i++)
        if (col_of[i] == c || col_of[i] - c == i - r || col_of[i] - c == r - i)
            return 0;                      /* same column or same diagonal */
    return 1;
}

static void place(int r)
{
    if (r == N) {
        if (solutions == 0) {              /* show the first solution found */
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++)
                    printf("%c ", col_of[i] == j ? 'Q' : '.');
                putchar('\n');
            }
        }
        solutions++;
        return;
    }
    for (int c = 0; c < N; c++)
        if (safe(r, c)) {
            col_of[r] = c;
            place(r + 1);                  /* recursion: try the next row */
        }
}

int main(void)
{
    place(0);
    printf("\nNumber of different solutions: %d\n", solutions);
    return 0;
}
