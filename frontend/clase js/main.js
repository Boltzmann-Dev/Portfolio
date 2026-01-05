//**game loop***//

const { startTransition } = require("react");

var time = new Date();
var delta = 0;

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(init, 1);
}else {
    document.addEventListener("DOMContentLoaded", init);
}

function init(){
    time = new Date(); 
    startTransition(() => {
        gameLoop();
    });
}


function gameLoop(){
    delta = (new Date() - time)/1000;
    time = new Date();

    update(delta);
    requestAnimationFrame(gameLoop);
}

var sueloY =22;
var velY =0;
var impulso=900;
var gravedad=2500;

var dinoPosX=42;
var dinoPosY=sueloY;

var sueloX = 0;
var verlEscenario =1280;
var gameVel=1;
var score =0;

var parado = false;
var saltando = false;

var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;

function startTransition(){
    gameOver = document.querySelector(".game-over");
    contenedor = document.querySelector(".contenedor");
    dino = document.querySelector(".dino");
    textoScore = document.querySelector(".score");
    suelo = document.querySelector(".suelo");
}


function update(){
    MoverSuelo();

}
function MoverSuelo(){
    sueloX += CalcularDesplazamiento();
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";

}

function CalcularDesplazamiento(){
    return verlEscenario*gameVel*delta;
}