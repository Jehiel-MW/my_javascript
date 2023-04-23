//this is a program to count the number of digit
//the program will return the total number of digit in a series of number
//the trial code is below


let count = 0;
function countDigit(num) {
    while (num > 0) {
        num = Math.trunc(num / 10);
        count++;
    }
    console.log("Total Digit: ", count)
    return count
}

//trial function
countDigit(12346789)
