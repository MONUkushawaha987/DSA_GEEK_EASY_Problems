
		// JavaScript code for the above approach 

function isPrime(n) 
	{ 
		// Corner case 
		if (n <= 1) return false; 
	
		// Check from 2 to square root of n 
		for (let i = 2; i*i <= n; i++) 
			if (n % i == 0) 
				return false; 
	
		return true; 
	} 

		// Driver Code 
		
		if(isPrime(11)) 
			document.write(" true" + "<br/>"); 
		else
			document.write(" false" + "<br/>"); 
		if(isPrime(15)) 
			document.write(" true" + "<br/>"); 
		else
		document.write(" false" + "<br/>"); 
