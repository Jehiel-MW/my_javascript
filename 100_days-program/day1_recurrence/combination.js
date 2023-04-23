//combination program
//formula nCr = n! / r! * (n - r)!

let product1 = 1
let product2 = 1
let product3 = 1
function combination(num1, num2){
    for (i = 1; i <= num1; i++) {
        product1 = product1 * i
    }
    for (i = 1; i <= num2; i++) {
        product2 = product2 * i
    }
    let subtract = num1 - num2
    for (i = 1; i <= subtract; i++) {
        product3 = product3 * i
    }
    let downComb = product2 * product3
    let combine = product1 / downComb
    console.log("Combination: ", combine)
    return combine
}

//trial code here
combination(5, 4)
