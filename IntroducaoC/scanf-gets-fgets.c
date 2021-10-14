#include <stdio.h>

int main() {

    char str1[10];

    printf("Digite seus dados:\n");
    // scanf("%10[^\n]s", str1);               //
    // fflush(stdin);                          //
    // gets(str1);                             //
    // fflush(stdin);                          //
    fgets(str1, 10, stdin);
    fflush(stdin);

    // printf("O valor digitado: %s\n", str1); //

    puts("O digitou:\t");
    // tecla tab(\t)                           //
    puts(str1);

    return 0;    
}

