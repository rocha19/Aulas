package composicao;

public class Casa {
    public static void main(String[] args) {
        Quarto quarto = new Quarto();
        quarto.comprimento = 5;
        quarto.largura = 4;
        quarto.tipoPiso = "Porcelana";
        quarto.qtdJanela = 2;
        quarto.ar.potenciaBtus = 9000;
        quarto.lamp1.led = true;
        quarto.lamp1.marca = "Philips";
        quarto.cama.marca = "Ortobom";
        quarto.cama.modelo = "King Size";
        System.out.println("Cama-Modelo: " + quarto.cama.modelo + "\n" + "Tipo do Piso: " + quarto.tipoPiso);
    }
}
