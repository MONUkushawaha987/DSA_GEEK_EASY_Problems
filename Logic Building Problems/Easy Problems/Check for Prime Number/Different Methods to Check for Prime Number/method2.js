// Function to check whether a number is prime or not
function isPrime(n) {

    // Numbers less than or equal to 1 are not prime
    if (n <= 1)
        return false;

    // Check divisibility from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) 
            return false;

    // If no divisors were found, n is prime
    return true;
}

// Driver Code
let n = 11; 
if(isPrime(n))
	console.log("true");
else
	console.log("false");