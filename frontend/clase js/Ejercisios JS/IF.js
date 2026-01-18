function bmiCalculator (weight, height) {
    var bmi = weight/(height*height)
    if (bmi<18.5){
        var interpretation= ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9){
        interpretation = ", so you have a normal weight.";
    } else {
        interpretation = ", so you are overweight.";
    }
        interpretation = "Your BMI is "+ bmi + interpretation;
    return interpretation;
}

bmiCalculator(85,1.75);

function bisiesto(año){
    if (año%4 === 0){
        var bisi = "es bisiesto";
    }else {
        bisi = "no es bisiesto";
    }
    if (año%100 === 0){
        bisi = "no es bisiesto";
    }
    if (año%400 === 0){
        bisi = "es bisiesto";
    }
    return bisi;
} 
bisiesto(2000);