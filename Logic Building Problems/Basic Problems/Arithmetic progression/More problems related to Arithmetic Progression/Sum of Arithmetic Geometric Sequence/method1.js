
// javascript program to find the
// sum of first n terms.

// Return the sum of first
// n term of AGP
function sumofNterm(a, d, b, r, n)
{
	
	// finding the each term
	// of AGP and adding
	// it to sum.
	let sum = 0;
	for (let i = 1; i <= n ; i++)
		sum += ((a + (i -1) * d) *
				(b * Math.pow(r, i - 1)));
	return sum;
}

// Driver Code
let a = 1; 
let d = 1;
let b = 2; 
let r = 2;
let n = 3;
document.write(sumofNterm(a, d, b, r, n));

