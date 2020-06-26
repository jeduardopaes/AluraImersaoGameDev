class Personagem {

    constructor(imagem, widthPersonagem, heightPersonagem) {
        this.imagem = imagem;
        this.width = widthPersonagem;
        this.height = heightPersonagem;
        this.frame = [0, 0];
    }

    exibe() {
        image(this.imagem, 25, height - 135, 110, 135, this.frame[0], this.frame[1], this.width, this.height);

        this.anima();
    }

    anima() {
        this.frame[0] += this.width;
        if (this.frame[0] >= this.imagem.width) {
            this.frame[0] = 0;
            this.frame[1] += this.height;
        }
        if (this.frame[1] >= this.imagem.height) {
            this.frame[1] = 0;
        }
    }
}