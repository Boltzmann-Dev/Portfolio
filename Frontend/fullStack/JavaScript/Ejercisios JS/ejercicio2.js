var names = ["Diego", "Paco", "Juan","David"]
function whosPaying(name){
    var rmd = Math.random()*name.length;
    rmd = Math.floor(rmd);
    return names[rmd];
    
}
var diegoNum = 0;
var pacoNum = 0;
var juanNum = 0;
var davidNum = 0;
for (let i= 0;i<1000;i++){
    var iname = whosPaying(names);
    if (iname == "Diego"){
        diegoNum++;
    }
    if (iname == "Paco"){
        pacoNum++;
    }
    if (iname == "Juan"){
        juanNum++;
    }
    if (iname == "David"){
        davidNum++;
    }
}
console.log(diegoNum + ":Diegos " + pacoNum + ":Pacos " + juanNum + ":Juanes " + davidNum + "David");