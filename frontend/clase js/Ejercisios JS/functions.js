/*function vanilla*/
function name(){
    console.log("Diego");
}
name()

/*function con argumento*/
function comprar(numBanano){
    var cost = numBanano * 1.5;
    console.log("compro " + numBanano +" bananos a un precio de: $" + cost);
}
comprar(8);

/*reto*/

function reto(money){
    var cost =2;
    var vuelto = money%cost;
    var numBananos = (money-vuelto)/cost;
    console.log("Diego envio con $" + money + " a robototo para comprar bananos")
    console.log("-Robototo: Con $" + money + " te alcanza para " + numBananos + " bananos, y te sobra $" + vuelto + ", costo por unidad: $" + cost);
}
reto(19.5);

function retorno(age){
 
 var daysYear = 365;
 var weeksYear=52;
 var ageer=90-age
 var daysLife = ageer*daysYear;
 var weeksLife = ageer*weeksYear;
 var monthsLife = ageer*12;
 
 console.log("You have " + daysLife + " days, " + weeksLife + " weeks, and " + monthsLife + " months left."  );
 return ageer;
}

function bmi(w,h){

    var imc = Math.round(w/(h*h));
    
    return imc;
}
bmi(65,1.8);