
const images = [
    "./images/crash.png",
    "./images/kick.png",
    "./images/snare.png",
    "./images/tom1.png",
    "./images/tom2.png",
    "./images/tom3.png",
    "./images/tom4.png",
];
let instrument =document.querySelectorAll("button").length;
for (let i =0;i<instrument;i++){
document.querySelectorAll("button")[i].querySelector("img").setAttribute("src",images[i]);
document.querySelectorAll("button")[i].addEventListener("click",function handleClik(){
    const audio = new Audio(audios[i]);
    audio.play();
});
}



const audios = [
    "./sounds/crash.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/snare.mp3",
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3",
];