#include <stdio.h>

int main (void)
{
    int i;
    char c;

    for (i=0; i<256; i++)
        printf("Ocodigo ASCII de '%c' é %d\n", i, i);
}