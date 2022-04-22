package EncapsulamentoGuana;

public class ControleRemoto implements Controlador {
    private int volume;
    private boolean ligado;
    private boolean tocanto;

    public ControleRemoto() {
        this.volume = 50;
        this.ligado = false;
        this.tocanto = false;
    }

    private int getVolume() {
        return volume;
    }

    private boolean getligado() {
        return ligado;
    }

    private boolean getTocanto() {
        return tocanto;
    }

    private void setVolume(int v) {
        this.volume = v;
    }
    
    private void setLigado(boolean l) {
        this.ligado = l;
    }

    private void setTocando(boolean t) {
        this.tocanto = t;
    }

    @Override
    public void ligar() {
        setLigado(true);
    }

    @Override
    public void desligar() {
        setLigado(false);
    }

    @Override
    public void abrirMenu() {
        System.out.println("------ MENU ------");
        System.out.println(this.getligado());
        System.out.println(this.getTocanto());
        System.out.print(this.getVolume() + " ");

        for (int i = 0; i <= this.getVolume(); i += 10){
            System.out.print("|");
        }
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando Menu...");
    }

    @Override
    public void maisVolume() {
        if (this.getligado()) {
            this.setVolume(this.getVolume() + 10);
        }
    }

    @Override
    public void menosVolume() {
        if (this.getligado()) {
            this.setVolume(this.getVolume() - 5);
        }
    }

    @Override
    public void ligarMudo() {
        if (this.getligado() && this.getVolume() > 0) {
            this.setVolume(0);
        }
    }

    @Override
    public void DesligarMudo() {
        if (this.getligado() && this.getVolume() == 0) {
            this.setVolume(50);
        }
    }

    @Override
    public void play() {
        if (this.getligado() && !(this.getTocanto())) {
            setTocando(true);
        }
    }

    @Override
    public void pause() {
        if (this.getligado() && this.getTocanto()) {
            setTocando(false);
        }
    }
}
