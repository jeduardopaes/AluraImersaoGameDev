class Inimigo extends Animacao {


    constructor(matriz, imagem, posicaoX,
        largura, altura, larguraSprite, alturaSprite) {

        super(matriz, imagem, posicaoX,
            largura, altura, larguraSprite, alturaSprite);

        this.velocidade = 10;
    }

    move() {
        this.posicaoX -= this.velocidade;
        if (this.posicaoX < -this.largura) {
            this.posicaoX = width;
        }
    }


}