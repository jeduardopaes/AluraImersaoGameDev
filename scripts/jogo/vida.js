class Vida {
    constructor(maximo, inicial) {
        this.maximo = maximo;
        this.inicial = inicial;
        this.vidas = inicial;

        this.largura = 25;
        this.altura = 25;

    }

    draw() {
        const margem = 5
        for (let i = 0; i < this.vidas; i++) {
            image(imagemCoracao, margem * i + (this.largura * i), margem, this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas < this.maximo) {
            this.vidas++;
        }
    }

    perdeVida() {
        if (this.vidas > 0) {
            this.vidas--;
        }
    }
}