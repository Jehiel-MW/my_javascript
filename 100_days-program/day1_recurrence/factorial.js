//Factorial function below
//This will help solve any factorial problem
// factorial is given as n! = n(n-1)(n-2)(n-3)(n-4)

let product = 1;
function factorial(num){
    for(i = 1; i <= num; i++){
        product = product * i;
    }
    console.log("Factorial Result: ", product);
    return product;
}

//trial code below
factorial(5)
