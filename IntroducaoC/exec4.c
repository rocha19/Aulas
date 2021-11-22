#include <stdio.h>

int main(){

    int i;

    for (i=0; i<256; i++){
        printf("O código ASCII de %c eh %d \n", i, i);
    }

    return 0;
}