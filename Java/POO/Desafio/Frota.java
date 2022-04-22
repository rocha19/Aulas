package Desafio;

public class Frota {
    public String nome;
    public String tipo;
    public String responsavel;
    public Carro carro;
    public Caminhao caminhao;

    public Frota() {
        caminhao = new Caminhao();
        carro = new Carro();
    }

}
