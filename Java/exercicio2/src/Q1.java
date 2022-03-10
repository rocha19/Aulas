import java.util.Scanner;


public class Q1 { // questão 01
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        

        int n = 10;
        int array[] = new int[n];
        int i, aux;
        int par = 0, impar = 0;

        
        for (i = 0; i < n; i++) {
            System.out.printf("Item %d de %d: ", (i++), n); // a. Ao final Exiba na tela
            array[i] = scan.nextInt(); 
            scan.close();
            aux = array[i]; 

            if (par < aux && aux % 2 == 0) {
                par = array[i]; // b. O maior elemento par (se houver)
            }
            if (impar < aux && aux % 2 != 0) {
                impar = array[i]; // c. O menor elemento ímpar (se houver)
            }
        }

        System.out.printf("O maior elemento par é: %d\nO maior elemento impar é: %d\n", par, impar);

        int soma = 0;
        double media;

        
        for (i = 0; i < n; i++) {
            soma = soma + array[i]; // d. O somatório de todos os elementos
        }

        System.out.printf("A soma de todos os indices do vetor: %d\n", soma);

        // e. A média de todos os elementos
        media = soma / (double) n;
        System.out.printf("A media entre todos elementos: %d\n", media);

        // f. Imprima também o elemento que da posição 3 e 7
        System.out.printf("Esses são os elementos nas posições 3 e 7, respectivamente: %d | %d\n", array[3], array[7]);

        // g. Some os valores da posição 4 e 8, depois mostre o resultado
        System.out.printf("A soma dos elementos nas posições 4 e 8 são: %d\n", array[4] + array[8]);

        // h. Verifique se o valor da posição 5 é múltiplo do valor da posição 9
        if (array[5] % array[9] == 0) {
            System.out.println("O elemento da posição 5 é divisivel pelo elemento da posição 9");
        } else {
            System.out.println("O elemento da posição 5 não é divisivel pelo elemento da posição 9");
        }
    }
}
