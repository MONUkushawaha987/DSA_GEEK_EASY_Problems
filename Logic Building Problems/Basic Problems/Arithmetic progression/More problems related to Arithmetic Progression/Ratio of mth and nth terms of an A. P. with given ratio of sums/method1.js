
// JavaScript code to calculate ratio 

// function to calculate ratio of mth and nth term 
function CalculateRatio(m, n) 
{ 
	// ratio will be tm/tn = (2*m - 1)/(2*n - 1) 
	return (2 * m - 1) / (2 * n - 1); 
} 

// Driver code 

	let m = 6, n = 2; 
	document.write(CalculateRatio(m, n)); 

