class Jogo {
    constructor() {
        this.indice = 0;

        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 5);
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 15, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10);
        const troll = new Inimigo(matrizInimigoGrande, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10);
        inimigos.push(inimigo);
        inimigos.push(troll);
        inimigos.push(inimigoVoador);
        somDoJogo.loop();
    }

    keyPress(keyCode) {
        if (keyCode === 32) {
            somDoPulo.play();
            personagem.pula();
        }

        if (keyCode === 113) {
            if (gameIsOver === true) {
                location.reload();
            }
        }
    }

    draw() {

        cenario.exibe();
        cenario.move();

        vida.draw();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.posicaoX < -inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;


        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }


        personagem.aplicaGravidade();
        personagem.exibe();

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.ficaInvencivel();
            if (vida.vidas === 0) {
                noLoop();
                gameIsOver = true;
                image(imagemGameOver, width / 2 - 200, height / 3);
            }
        }

        pontucao.exibe();
        pontucao.adicionarPonto() * (deltaTime / 50);

        if (pontucao.pontos % 200 === 0) {
            vida.ganhaVida();
        }
    }
}