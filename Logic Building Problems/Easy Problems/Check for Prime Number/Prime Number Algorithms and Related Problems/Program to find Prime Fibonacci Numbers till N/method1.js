
// Javascript program to print prime numbers 
// present in Fibonacci series.

// Function to check perfect square
function isSquare(n)
{
    let sr = Math.sqrt(n);
    return (sr * sr == n);
}
  
// Prints all numbers less than or equal
// to n that are both Prime and Fibonacci.
function prletPrimeAndFib(n)
{
    // Using Sieve to generate all 
    // primes less than or equal to n.
    let prime = []; 
      
    // memset(prime, true, sizeof(prime));
    for (let p = 0; p <= n; p++) 
    prime[p] = true;
    for (let p = 2; p * p <= n; p++) {
  
        // If prime[p] is not changed,
        // then it is a prime
        if (prime[p] == true) {
  
            // Update all multiples of p
            for (let i = p * 2; i <= n; i += p)
                prime[i] = false;
        }
    }
  
    // Now traverse through the range and 
    // print numbers that are both prime 
    // and Fibonacci.
    for (let i=2; i<=n; i++) { 
        let sqrt = Math.sqrt(5 * i * i + 4);
        let sqrt1 = Math.sqrt(5 * i * i - 4);
      
        let x = Math.floor(sqrt);
        let y = Math.floor(sqrt1);
  
    if (prime[i]==true && (Math.pow(sqrt,2) == 
        Math.pow(x,2) || Math.pow(sqrt1,2) == 
        Math.pow(y,2)))
        document.write(i+" ");
    }
}
    
// Driver code

    let n = 30;
    printPrimeAndFib(n);
 