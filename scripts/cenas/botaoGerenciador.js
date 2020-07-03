class BotaoGerenciador {

    constructor(texto, posicaoX, posicaoY) {
        this.texto = texto;
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.botao = createButton(this.texto);
        this.botao.addClass('botao-tela-inicial');
        this.botao.mousePressed(() => {
            this._alteraCena();
        });
    }

    draw() {
        this.botao.position(this.posicaoX, this.posicaoY);
    }

    _alteraCena() {
        this.botao.remove();
        cenaAtual = 'jogo';
    }
}