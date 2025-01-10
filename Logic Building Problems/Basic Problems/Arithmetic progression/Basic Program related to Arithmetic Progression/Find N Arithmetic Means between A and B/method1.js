

// JavaScript program to find n arithmetic
// means between A and B

// Prints N arithmetic means 
// between A and B.
function printAMeans(A, B, N){

	// Calculate common difference(d)
	let d = (B - A) / (N + 1)
	
	// For finding N the arithmetic 
	// mean between A and B
	for(let i = 1; i < N + 1; i++) 
		document.write(Math.floor(A + i * d)," ") 
}

// Driver code
let A = 20, B = 32, N = 5;
printAMeans(A, B, N) 


