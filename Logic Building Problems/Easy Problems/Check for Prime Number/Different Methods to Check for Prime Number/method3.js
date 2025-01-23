function isPrime(n) {
    // Check if n is 1 or 0
    if (n <= 1)
        return false;

    // Check if n is 2 or 3
    if (n === 2 || n === 3)
        return true;

    // Check whether n is divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0)
        return false;
    
    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (let i = 5; i <= Math.sqrt(n); i += 6)
        if (n % i === 0 || n % (i + 2) === 0)
            return false;

    return true;
}

// Driver Code
let n = 11;
if(isPrime(n))
	console.log("true");
else
	console.log("false");