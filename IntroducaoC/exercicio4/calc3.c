#include <stdio.h>
#include <math.h>

void main()
{
    float x;
    int num1;
    int num2;

    num1 = 9801 / 100;
    num2 = 9801 % 100;

    x = num1 + num2;
    sqrt(x);
    printf("resultado: %f", x);
    
}