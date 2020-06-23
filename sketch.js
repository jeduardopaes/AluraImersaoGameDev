let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
}

// this function runs once
function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 5);
    personagem = new Personagem(imagemPersonagem, 220, 270);
    somDoJogo.loop();
    frameRate(24);
}

// this function updates canvas
function draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();
    personagem.anima();
}