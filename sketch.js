// this function runs once
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(32);
    botaoGerenciador = new BotaoGerenciador('Play', width / 2, height / 2);
    telaInicial = new TelaInicial();
    jogo = new Jogo();
    jogo.setup();
    cenas = {
        jogo,
        telaInicial
    };
}

// Check if key is pressed
function keyPressed() {
    jogo.keyPress(keyCode);
}


// this function updates canvas
function draw() {
    cenas[cenaAtual].draw();
}