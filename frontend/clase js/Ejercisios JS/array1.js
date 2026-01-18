var guestList = ["Diego","Martin","Tsabel","Tomas"];
var numGuest = guestList.length;
function agreeGuest(){
    var bandera = 0;
    var name = prompt("Whats your name?");
    for (let i=0;i<numGuest;i++){
        if (name == guestList[i]){
            console.log("You are welcome "+ name + ", Enjoy the party")
            i=numGuest + 1 
            bandera = 1;
        }
    }
    if (bandera === 0){
        console.log("Zorry " + name + ", i did not invite you to my party")
    }
}
agreeGuest();