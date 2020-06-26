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
        this.velocidadeDoPulo = -50
    }

    aplicaGravidade() {
        this.posicaoY += this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.posicaoYChao < this.posicaoY) {
            this.posicaoY = this.posicaoYChao;
        }

    }
}