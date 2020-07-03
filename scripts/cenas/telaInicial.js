class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fontTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de', width / 2, height / 3);
        textSize(100);
        text('Hipsta', width / 2, height / 2);
    }

    _botao() {
        botaoGerenciador.draw();
    }
}