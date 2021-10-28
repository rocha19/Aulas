#include <stdio.h>


void main()
{
    
    int num1, num2, num3;

    printf("Digite um numero:\n");
    scanf("%d", &num1);
    printf("Digite outro numero:\n");
    scanf("%d", &num2);
    printf("Digite outro numero:\n");
    scanf("%d", &num3);

    if (num1 > num2)
    {
        printf("O maior numero é o: %d", num1);
        if (num2 > num1) 
        {
            printf("O maior numero é o: %d", num2);
            if (num3 > num1)
            {    
                printf("O maior numero é o: %d", num3);
            }
        }
    }
}