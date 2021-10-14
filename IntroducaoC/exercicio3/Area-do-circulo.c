#include <stdio.h>
#define PI 3.14
// cont float PI = 3.14

int area_do_circulo (int r){
    int area;
    area = r * r * PI;
    return area;
}


int main(){
    int resultado;
    resultado = area_do_circulo (13);
    printf("A área do seu circulo é: %d", resultado);
    return 0;
}
