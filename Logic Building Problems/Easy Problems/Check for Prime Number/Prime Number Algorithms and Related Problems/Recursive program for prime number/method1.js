

// JavaScript program to find whether a Number
// is Prime or Not using Recursion

	// Returns true if n is prime, else
	// return false.
	// i is current divisor to check.
	function isPrime(n, i)
	{

		// Base cases
		if (n <= 2)
			return (n == 2) ? true : false;
		if (n % i == 0)
			return false;
		if (i * i > n)
			return true;
		
		// Check for next divisor
		return isPrime(n, i + 1);
	}


// Driver code

		
	let n = 15;

		if (isPrime(n, 2)) 
			document.write("Yes");
		else
			document.write("No");
