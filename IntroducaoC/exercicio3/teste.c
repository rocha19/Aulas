#include <stdio.h>

int multiplicar (int n1, int n2){
    int produto;
    produto = n1 * n2;
    return produto;
}


int main(){
    int resultado;
    resultado = multiplicar (6, 7);
    printf("6 vezes 7 eh %d", resultado);
    return 0;
}
