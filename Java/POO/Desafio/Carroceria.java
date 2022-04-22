package Desafio;

public class Carroceria {
    public String tipoCarroceria;
    public Fabricante fabricante;
    public Caminhao caminhao;


    public Carroceria() {
        fabricante = new Fabricante();
        caminhao = new Caminhao();
    }
}
