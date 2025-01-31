// Javascript code to find two primes whose sum 
// equals given even number

// Function to generate primes up to n 
// using Sieve of Eratosthenes
function sieve(n) {

    // Initialize all as prime
    let isPrime = Array(n + 1).fill(true);

    // 0 and 1 are not primes
    isPrime[0] = isPrime[1] = false;

    // Mark non-primes using multiples of each prime
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}

// Function to find two primes whose sum equals n
function primeDivision(n) {

    // Get all primes up to n
    const isPrime = sieve(n);

    // Iterate to find the smallest pair
    for (let i = 2; i <= n / 2; i++) {
        if (isPrime[i] && isPrime[n - i]) {
            return [i, n - i];
        }
    }

    // Return empty array if no pair found (won't occur)
    return [];
}

const n = 74;
const result = primeDivision(n);

console.log(result[0], result[1]);