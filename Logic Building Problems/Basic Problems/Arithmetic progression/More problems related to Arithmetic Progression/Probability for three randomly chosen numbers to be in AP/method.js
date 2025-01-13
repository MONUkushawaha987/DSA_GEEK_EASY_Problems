
// Javascript program to find probability that 
// 3 randomly chosen numbers form AP.

// function to calculate probability
function procal(n)
{
	return (3.0 * n) / 
		(4.0 * (n * 
			n) - 1);
}

	// Driver code 
	let a = [1, 2, 3, 4, 5];
	let n = a.length;
	document.write(procal(n));
	
