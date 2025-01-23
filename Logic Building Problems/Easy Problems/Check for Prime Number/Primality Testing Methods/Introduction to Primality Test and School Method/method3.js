
	// JavaScript program to check the given number 
	// is prime or not 
	
	// Function to check if the given number 
	// is prime or not. 
	function isPrime(n) 
	{ 
		if (n == 2 || n == 3) 
			return true; 
	
		if (n <= 1 || n % 2 == 0 || n % 3 == 0) 
			return false; 
	
		// To check through all numbers of the form 6k ± 1 
		for (let i = 5; i * i <= n; i += 6) { 
			if (n % i == 0 || n % (i + 2) == 0) 
				return false; 
		} 
	
		return true; 
	} 
	
	// Driver Code 
	
		isPrime(11) ? document.write(" true" + "<br/>") : document.write(" false" + "<br/>"); 
		isPrime(15) ? document.write(" true" + "<br/>") : document.write(" false" + "<br/>"); 
	
	