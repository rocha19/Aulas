#include <stdio.h>

int main (void)
{

    int num = 0;
    int i;
    
    system("cls");
    for (i=1; i<50; i++)
    {
        if(i % 2 == 1)
        {
            num += i;
        }
        
    }
    printf("Soma dos numeros impares e: %i", num);
}