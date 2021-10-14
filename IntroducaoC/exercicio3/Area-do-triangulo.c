#include <stdio.h>
// #include <locale>

// setlocale(LC_ALL, "Portuguese")

int area_do_triangulo (int b, int h){
    int area;
    area = b * h / 2;
    return area;
}


int main(){
    int resultado;
    resultado = area_do_triangulo (10, 5);
    printf("A área do seu triangulo é: %d", resultado);
    return 0;
}
