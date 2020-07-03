function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
    imagemInimigoTroll = loadImage('assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('assets/imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('assets/imagens/assets/telaInicial.png');
    fontTelaInicial = loadFont('assets/imagens/assets/fonteTelaInicial.otf');
    imagemCoracao = loadImage('assets/imagens/assets/coracao.png');
    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
    somDoPulo = loadSound('assets/sons/somPulo.mp3');
    pontucao = new Pontuacao();

    fita = loadJSON('fita/fita.json');
}