import java.util.Scanner;


public class Q2 {

    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String nome;
        float salario, salarioFinal;
        int qtdDependente, beneficio;

        // capturando e escrevendo o nome
        System.out.println("Digite o nome do funcionario");
        nome = scan.nextLine();
        System.out.println("O nome do funcionario é " + nome);

        // capturando e escrevendo o salário
        System.out.println("Digite o salário do funcionario");
        salario = scan.nextFloat();
        System.out.println("O salário do funcionario é " + salario);

        //capturando e escrevendo qtd
        System.out.println("Digite a quantidade de dependetes do funcionario");
        qtdDependente = scan.nextInt();
        System.out.println("A quantidade de dependetes funcionario é " + qtdDependente);
        
        qtdDependente = qtdDependente * 15;

        //menu
        System.out.println("1 | Ajuda de Custo     | 150,00");
        System.out.println("2 | Vale Alimentação   | 75,00");
        System.out.println("3 | Vale Escola        | 290,00");
        System.out.println("4 | Combustível        | 305,00");
        System.out.println("5 | Telefone           | 145,00");
        System.out.println("6 | Despesas de Viagem | 430,00");
        System.out.println("7 | Internet           | 200,00");
        System.out.println("8 | Livros             | 350,00");
        System.out.println("9 | Energia Elétrica   | 280,00");
        System.out.println("0 | SAIR               |       ");
        System.out.println("Digite uma opção do menu: ");

        beneficio = scan.nextInt();
        scan.close();
        switch (beneficio) {
            case 1:
                salarioFinal = salario - qtdDependente + 150;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 2:
                salarioFinal = salario - qtdDependente + 75;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 3:
                salarioFinal = salario - qtdDependente + 290;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 4:
                salarioFinal = salario - qtdDependente + 305;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 5:
                salarioFinal = salario - qtdDependente + 145;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 6:
                salarioFinal = salario - qtdDependente + 430;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 7:
                salarioFinal = salario - qtdDependente + 200;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 8:
                salarioFinal = salario - qtdDependente + 350;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 9:
                salarioFinal = salario - qtdDependente + 280;
                System.out.println("O salário liquido do funcionario é: " + salarioFinal);
                break;
            case 0:
                System.out.println("Volte sempre");
                break;
            default: System.out.println("Numero inválido");
        }   
    }
}
