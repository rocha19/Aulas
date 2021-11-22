#include <stdio.h>

int main(){
    int A, B, C, D, soma, R1, R2, R3, R4;

    A=2;
    B=4;
    C=6;
    D=8;

    R1=C*(B-A);
    R2=(B/A) + D;
    R3=C+B/A;
    R4=R1+R2+R3;

    printf("O resultaado de R4 e igual a %d", R4);

    return 0;
}