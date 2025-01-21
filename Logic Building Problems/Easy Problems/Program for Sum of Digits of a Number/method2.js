// Recursive JavaScript Code to find sum of digits

function sumOfDigits(n) {
    
    // Base Case
    if (n == 0)
        return 0;

    // Recursive Case
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Driver code
console.log(sumOfDigits(12345));