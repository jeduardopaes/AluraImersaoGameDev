class Inimigo extends Animacao {


    constructor(matriz, imagem, posicaoX, variacaoY,
        largura, altura, larguraSprite, alturaSprite, velocidade) {

        super(matriz, imagem, posicaoX, variacaoY,
            largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
    }

    move() {
        this.posicaoX -= this.velocidade * (deltaTime / 50);
    }

    aparece() {
        this.posicaoX = width;
    }


}