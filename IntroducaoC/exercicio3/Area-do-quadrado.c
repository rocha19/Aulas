#include <stdio.h>

int area_do_quadrado (int b, int h){
    int area;
    area = b * h;
    return area;
}


int main(){
    int resultado;
    resultado = area_do_quadrado (10, 5);
    printf("A área do quadrado é: %d", resultado);
    return 0;
}
