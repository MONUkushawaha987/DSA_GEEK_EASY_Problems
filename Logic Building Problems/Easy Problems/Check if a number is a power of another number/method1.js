
// JavaScript program to check if a number 
// is power of another number 

/* Returns true if y is a power of x */
	function isPower(x, y)
	{
		// The only power of 1 is 1 itself
		if (x == 1)
			return (y == 1);

		// Repeatedly compute power of x
		let pow = 1;
		while (pow < y)
			pow = pow * x;

		// Check if power of x becomes y
		return (pow == y);
	}


// Driver Code

		//check the result for true/false and print.
		document.write((isPower(10, 1) ? 1 : 0) + "<br/>");
		document.write((isPower(1, 20) ? 1 : 0) + "<br/>");
		document.write((isPower(2, 128) ? 1 : 0) + "<br/>");
		document.write((isPower(2, 30) ? 1 : 0) + "<br/>");
