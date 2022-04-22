package Desafio;

public class Caminhao {
    public String modelo;
    public String placa;
    public boolean cabineDupla;
    public Pneu pneu;
    public Motor motor;
    public Marcha marcha;
    public Carroceria carroceria;
    public Fabricante fabricante;

    public Caminhao() {
        pneu = new Pneu();
        motor = new Motor();
        marcha = new Marcha();
        carroceria = new Carroceria();
        fabricante = new Fabricante();

    }

}
