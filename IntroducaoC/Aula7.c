#define FALSE 0
#define TRUE 1

void main()
{
    int terminar = FALSE;
    int i=0;

    while (!terminar)
    {
        printf("Continuando %d...\n", i);
        if (i>10) terminar = TRUE;
        i++;
    }

}

/*

do 
{
    comando1,
    comando2,
    //...
} while (expressaoBoleana);

*/
