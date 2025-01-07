// JavaScript Program to print an arithmetic 
// progression series 

	function printAP(a, d, n) 
	{ 

		// Printing AP by simply adding d 
		// to previous term. 
		let curr_term; 
		curr_term=a; 
		for (let i = 1; i <= n; i++) 
		{ document.write(curr_term + " "); 
			curr_term =curr_term + d; 
	
		} 
	} 

	// Driver code 

	// starting number	 
	let a = 2; 
	
	// Common difference 
	let d = 1; 
	
	// N th term to be find 
	let n = 5; 

	printAP(a, d, n); 




