package Desafio;

public class Carro {
    public String modelo;
    public String placa;
    public Fabricante fabricante;
    public Motor motor;
    public Pneu pneu;

    public Carro() {
        fabricante = new Fabricante();
        motor = new Motor();
        pneu = new Pneu();
    }
}
