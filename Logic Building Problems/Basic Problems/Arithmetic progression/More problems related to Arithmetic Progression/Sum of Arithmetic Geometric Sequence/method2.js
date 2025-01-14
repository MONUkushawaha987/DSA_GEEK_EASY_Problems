

// JavaScript Program to find the sum of first n terms.

	// Return the sum of first n term of AGP
	function sumofNterm(a, d, b, r, n)
	{
		let ans = 0; 
		ans += a; 
		ans += ((d * r * (1 - (Math.pow(r, n-1))))/(1-r)); 
		ans -= (a + (n-1)*d)*(Math.pow(r, n)); 
		return (ans*b)/(1-r);
	}

// Driver code 
		
		let a = 1, d = 1, b = 2, r = 2, n = 3;
		document.write(sumofNterm(a, d, b, r, n)); 
			
