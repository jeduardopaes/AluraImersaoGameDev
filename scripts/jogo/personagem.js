class Personagem extends Animacao {

    constructor(matriz, imagem, posicaoX, variacaoY,
        largura, altura, larguraSprite, alturaSprite) {

        super(matriz, imagem, posicaoX, variacaoY,
            largura, altura, larguraSprite, alturaSprite);

        this.gravidade = 3;
        this.velocidadeDoPulo = 0;
        this.posicaoYChao = height - this.altura - variacaoY;
        this.pulos = 0;

        this.invencivel = false;
    }

    pula() {
        if (this.posicaoYChao === this.posicaoY || this.pulos < 3) {
            this.velocidadeDoPulo = -30
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.posicaoY += this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.posicaoYChao < this.posicaoY) {
            this.posicaoY = this.posicaoYChao;
            this.pulos = 0;
        }

    }

    ficaInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 3000);
    }

    estaColidindo(inimigo) {
        if (this.invencivel) {
            return false;
        }
        const precisaoPersonagem = this.largura * 0.15;
        let precisao = inimigo.largura * 0.15;
        //noFill();
        //rect(this.posicaoX + precisaoPersonagem, this.posicaoY + precisaoPersonagem, this.largura - (precisaoPersonagem * 2), this.altura - (precisaoPersonagem * 1.5));
        //rect(inimigo.posicaoX + precisao, inimigo.posicaoY + precisao, inimigo.largura - (precisao * 2), inimigo.altura - (precisao * 2));
        const colisao = collideRectRect(this.posicaoX + precisaoPersonagem, this.posicaoY + precisaoPersonagem, this.largura - (precisaoPersonagem * 2), this.altura - (precisaoPersonagem * 1.5),
            inimigo.posicaoX + 15, inimigo.posicaoY, inimigo.largura, inimigo.altura);

        return colisao;
    }
}