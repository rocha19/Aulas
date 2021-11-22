#include <stdio.h>

int main(){

    int numeroint;
    scanf("%d", &numeroint);

    if (numeroint > 0){
        printf("positivo");
    }
    else if (numeroint < 0){
        printf("negativo");
    }
    if (numeroint % 2 == 0){
        printf("par");
    }
    else if (numeroint % 2 != 0){
        printf("impar");
    }
    return 0;
}