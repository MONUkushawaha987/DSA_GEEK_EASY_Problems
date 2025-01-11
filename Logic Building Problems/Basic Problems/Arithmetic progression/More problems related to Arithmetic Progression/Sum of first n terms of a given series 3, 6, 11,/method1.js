

// Javascript program to find sum of first n terms 
// Function to calculate the sum 

function calculateSum(n) 
{ 
	// starting number 
	let a1 = 1, a2 = 2; 

	// Common Ratio 
	let r = 2; 

	// Common difference 
	let d = 1; 

	return (n) * (2 * a1 + (n - 1) * d) / 2 + a2 
			* (Math.pow(r, n) - 1) / (r - 1); 
} 

// Driver code 

	// N th term to be find 
	let n = 5; 

	// find the Sn 
	document.write("Sum = " + calculateSum(n)); 



