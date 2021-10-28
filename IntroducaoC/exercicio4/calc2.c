#include <stdio.h>

void main()
{
    int idade;

    printf("Digite a idade:\n");
    scanf("%d", &idade);
    
    if (idade < 5)
    {
        printf("Sem idade mínima");
    }
    else if (idade >= 5 && idade <= 7)
    {
        printf("Categoria infantil A");
    }
    else if (idade >= 8 && idade <= 10)
    {
        printf("Categoria infantil B");
    }
    else if (idade >= 11 && idade <= 13)
    {
        printf("Categoria Juvenil A");
    } 
    else if (idade >= 14 && idade <= 17)
    {
        printf("Categoria Juvenil B");
    }
    else
    {
        printf("Categoria Adulto");
    }

}