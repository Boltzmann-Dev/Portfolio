function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var list = [];
    var ant = 0;
    var actmas = 1;
    var actmenos = 1;
    //Write your code here:
    for (i=1;i<=n;i++){
        if (i===1){
            list.push(ant);
        }else if(i===2){
            list.push(actmas);
        }else {
            
            actmas=ant+actmas;
            ant=actmenos;
            actmenos=actmas;
            list.push(actmas);
            
            
        }
        
    }
    
    return list
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(100);