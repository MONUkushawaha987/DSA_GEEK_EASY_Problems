

// Javascript program to print all primes 
// less than N 


// function check whether a number 
// is prime or not 
function isPrime(n) 
{ 
	// Corner case 
	if (n <= 1) 
		return false; 

	// Check from 2 to n-1 
	for (let i = 2; i < n; i++) 
		if (n % i == 0) 
			return false; 

	return true; 
} 
// Function to print primes 
function printPrime(n) 
{ 
	for (let i = 2; i <= n; i++) { 
		if (isPrime(i)) 
			document.write(i +" "); 
	} 
} 
// Driver Code 

	let n = 7; 
	printPrime(n); 

