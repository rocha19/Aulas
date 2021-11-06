#include <stdio.h>

funcao_nada()
    {};


int main ()

{

    int num = 0;
    int i;
    
    system("cls");
    for (i=1; i<50; i++)
    {
        /*
        if(i % 2 == 0)
        {
            num += i;
        }
        */

       // i % 2 == 0 ? funcao_nada() : num += i;

        i % 2 == 1 ? num += i : funcao_nada();
        
    }
    printf("Soma dos numeros impares e: %i", num);

    return 0;
}