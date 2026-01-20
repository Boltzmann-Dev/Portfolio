document.addEventListener("keydown", function(event){
    console.log(event.key);
    playSound(event.key);
})

const drum = document.querySelectorAll(".drum");
console.log(drum);
for (let i=0;i<drum.length;i++){
    drum[i].addEventListener("click",function(event){
        console.log(this.innerHTML)
        playSound(this.innerHTML);
        
    })
}

function playSound(key){
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;    
        default:
            break;
    }


}