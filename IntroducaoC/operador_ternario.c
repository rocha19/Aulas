#include <stdio.h>
#include <conio.h>

int main (void) {

    int numero;
  
    printf("Digite um numero: ");
    scanf("%d",&numero);
  
    numero >= 0 ? numero++ : numero--;

    /*
    if (numero  > = 0)
        Numero ++;
    else
        Numero --;
    */
  
    printf("O novo valor de numero e: %d",numero);
  
    getch();
    return(0);
}

