document.querySelector("h1").style.background="red";
var rmd1 = Math.random()*6;
rmd1 = Math.floor(rmd1)+1;
var rmd = Math.random()*6;
rmd = Math.floor(rmd)+1;
rmd = "./images/dice"+rmd+".png"
rmd1= "./images/dice"+rmd1+".png"
console.log(rmd,rmd1);
document.querySelector(".img1").setAttribute("src", rmd);
document.querySelector(".img2").setAttribute("src", rmd1);
if (rmd>rmd1){
    document.querySelector("h1").style.background="blue";
    document.querySelector("h1").innerHTML="P1 winner";
} else if (rmd ===rmd1) {
    document.querySelector("h1").style.background="orange";
    document.querySelector("h1").innerHTML="Table";
} else {
    document.querySelector("h1").style.background="gren";
    document.querySelector("h1").innerHTML="P2 winner";
}