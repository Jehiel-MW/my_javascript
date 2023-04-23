//Permutation program
// formula = n! / (n - r)!

let product1 = 1
let product2 = 1
function permutation(num1, num2){
    for(i = 1; i <= num1; i++){
        product1 = product1 * i
    }
    
    let subtract = num1 - num2
    for(i = 1; i <= subtract; i++){
        product2 = product2 * i
    }
    let ourPermutation = product1 / product2
    console.log("Permutation: ", ourPermutation)
    return ourPermutation
}

//trial code below
permutation(5, 2)
