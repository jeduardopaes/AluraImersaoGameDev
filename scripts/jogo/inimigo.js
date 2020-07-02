class Inimigo extends Animacao {


    constructor(matriz, imagem, posicaoX, variacaoY,
        largura, altura, larguraSprite, alturaSprite, velocidade, delay) {

        super(matriz, imagem, posicaoX, variacaoY,
            largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
        this.delay = delay;
    }

    move() {
        this.posicaoX -= this.velocidade;
        if (this.posicaoX < -this.largura - this.delay) {
            this.posicaoX = width;
        }
    }


}