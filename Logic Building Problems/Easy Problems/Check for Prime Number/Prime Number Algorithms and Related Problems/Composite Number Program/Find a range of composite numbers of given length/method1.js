
// Javascript program to find a range of 
// composite numbers of given length

// Method to find factorial
// of given number
function factorial(n)
{
	if (n == 0)
		return 1;

	return n * factorial(n - 1);
}

// To print range of length n
// having all composite integers
function printRange(n)
{
	let a = factorial(n + 2) + 2;
	let b = a + n - 1;
	
	document.write(`[${a}, ${b}]`);
	
	return 0;
}

// Driver Code
let n = 3;

printRange(n);
