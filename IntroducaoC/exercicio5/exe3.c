#include <stdio.h>

int main (void)
{

    int maior = 0, menor = 0, aux = 1;
    
    
    while (aux <= 20)
    {
        aux += 1;

        if(aux>maior)
        {
            maior = aux;
        }
        if(aux<menor)
        {
            menor = aux;
        }
          
    }
    printf("O maior numero é %d e o menor numero é %d", maior, menor);
}

    

    