
/*const images = [
    "./images/crash.png",
    "./images/kick.png",
    "./images/snare.png",
    "./images/tom1.png",
    "./images/tom2.png",
    "./images/tom3.png",
    "./images/tom4.png",
];*/
const audios = [
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/snare.mp3",
    "./sounds/crash.mp3",
    "./sounds/kick-bass.mp3",
    
    
];


let instrument =document.querySelectorAll(".drum").length;
const button = document.querySelectorAll(".drum");
for (let i =0;i<instrument;i++){

/*button.style.width = "150px";
button.style.height = "150px";
button.style.backgroundImage = "url('" + images[i]+"')";*/

button[i].addEventListener("click",function(){
    const audio = new Audio(audios[i]);
    audio.play();
});

}
document.addEventListener("keydown",function (event){
    const llave = event.key;
    let numSound = 0;
    let bandera = 0;
    switch (llave) {
        case "w":
            numSound=0;
            break;
        case "a":
            numSound=1;
            break
        case "s":
            numSound=2;
            break
        case "d":
            numSound=3;
            break
        case "j":
            numSound=4;
            break
        case "k":
            numSound=5;
            break
        case "l":
            numSound=6;
            break
        default:
            bandera = 1;
            break;
    }
    if (bandera===0){
            const audio = new Audio(audios[numSound]);
            audio.play();
    }
    
})





