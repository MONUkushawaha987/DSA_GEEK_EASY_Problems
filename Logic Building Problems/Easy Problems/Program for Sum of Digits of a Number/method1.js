// Iterative JavaScript Code to find sum of digits

function sumOfDigits(n) {
    let sum = 0;
    while (n !== 0) {

        // Extract the last digit
        let last = n % 10;

        // Add last digit to sum
        sum += last;

        // Remove the last digit
        n = Math.floor(n / 10);
    }
    return sum;
}

// Driver Code
let n = 12345;
console.log(sumOfDigits(n));