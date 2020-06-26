class Personagem extends Animacao {

    constructor(matriz, imagem, posicaoX,
        largura, altura, larguraSprite, alturaSprite) {

        super(matriz, imagem, posicaoX,
            largura, altura, larguraSprite, alturaSprite);

        this.gravidade = 3;
        this.velocidadeDoPulo = 0;
        this.posicaoYChao = height - this.altura;
    }

    pula() {
        if (this.posicaoYChao === this.posicaoY) {
            this.velocidadeDoPulo = -30
        }
    }

    aplicaGravidade() {
        this.posicaoY += this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.posicaoYChao < this.posicaoY) {
            this.posicaoY = this.posicaoYChao;
        }

    }

    estaColidindo(inimigo) {
        const precisao = .7;

        const colisao = collideRectRect(this.posicaoX, this.posicaoY, this.largura * precisao, this.altura * precisao,
            inimigo.posicaoX, inimigo.posicaoY, inimigo.largura * precisao, inimigo.altura * precisao);

        return colisao;
    }
}