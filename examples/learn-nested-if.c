#include <stdio.h>

int main(void)
{
    int marks[] = {92, 75, 58, 41, 20};

    for (int i = 0; i < 5; ++i) {
        int m = marks[i];
        char grade;
        if (m >= 90) {
            grade = 'A';
        } else if (m >= 70) {
            grade = 'B';
        } else if (m >= 50) {
            grade = 'C';
        } else if (m >= 40) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        printf("%d -> %c\n", m, grade);
    }

    int years[] = {1900, 2000, 2024, 2026};
    for (int i = 0; i < 4; ++i) {
        int y = years[i];
        int leap;
        if (y % 4 == 0) {
            if (y % 100 == 0) {
                leap = (y % 400 == 0);
            } else {
                leap = 1;
            }
        } else {
            leap = 0;
        }
        printf("%d is %sa leap year\n", y, leap ? "" : "not ");
    }
    return 0;
}
