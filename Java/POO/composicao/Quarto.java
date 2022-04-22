package composicao;

public class Quarto {
    public int largura;
    public int composicao;
    public String tipoPiso;
    public ArCondicionado ar;
    public Cama cama;
    public Lampada lamp1, lamp2, lamp3;
    public int qtdJanela; 
    public int comprimento;

    public Quarto() {
        ar = new ArCondicionado();
        cama = new Cama();
        lamp1 = new Lampada();
        lamp2 = new Lampada();
        lamp3 = new Lampada();
    }
}
