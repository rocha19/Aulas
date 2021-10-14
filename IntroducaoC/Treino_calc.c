#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// int main(int argc, char const *argv[])

int main(void)
{
    int num1, num2, res;

    system("color A8");
    setlocale(LC_ALL, "Portuguese");

    printf("Digite 1 para somar ou 2 para subtrair: \n");
    scanf("%d", &res);

    printf("Digite o primeiro numero: ");
    scanf("%d", &num1);

    printf("Digite o segundo numero: ");
    scanf("%d", &num2);

    if (res == 1){
        num1 = num1 + num2;
        printf("O resultado da operação é: %d", num1);
    }
    else{
        num2 = num1 - num2;
        printf("O resultado da operação é: %d", num2);
    }

    return 0;
}
