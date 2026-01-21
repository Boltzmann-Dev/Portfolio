var list =[];
for (let i =1;i<100;i++){
    
    if (i%3 === 0){
        if (i%5==0){
            if (i!==0){
                list.push("FizzBuzz");
            } else{
            list.push(i);
        }
        }
        else {
            list.push("Fizz");
        } 
    } else if (i%5 === 0){
        list.push("Buzz");
    } else {
        list.push(i);
    }
}
console.log(list);