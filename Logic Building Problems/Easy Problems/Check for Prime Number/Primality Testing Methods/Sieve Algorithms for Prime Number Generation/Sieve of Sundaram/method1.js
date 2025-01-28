// JavaScript program to print primes smaller
// than n using Sieve of Sundaram.

// Prints all prime numbers smaller
function SieveOfSundaram(n) 
{
  
    // In general Sieve of Sundaram, produces 
    // primes smaller than (2*x + 2) for a number
    // given number x. Since we want primes 
    // smaller than n, we reduce n to half
    let nNew = (n - 1) / 2;
  
    // This array is used to separate
    // numbers of the form i+j+2ij from 
    // others where 1 <= i <= j
    let marked = [];
  
    // Initialize all elements as not marked
    for (let i = 0; i < nNew + 1; i++)
    marked[i] = false;
  
    // Main logic of Sundaram. 
    // Mark all numbers of the
    // form i + j + 2ij as true
    // where 1 <= i <= j
    for (let i = 1; i <= nNew; i++)
    for (let j = i; (i + j + 2 * i * j) <= nNew; j++)
        marked[i + j + 2 * i * j] = true;
  
    // Since 2 is a prime number
    if (n >= 2)
      console.log(2 + " ");
  
    // Print other primes. 
    // Remaining primes are of 
    // the form 2*i + 1 such
    // that marked[i] is false.
    for (let i = 1; i <= nNew; i++)
    if (marked[i] == false)
        console.log(2 * i + 1 + " ");
    return -1;
}

// Driver program
let n = 20;
SieveOfSundaram(n);