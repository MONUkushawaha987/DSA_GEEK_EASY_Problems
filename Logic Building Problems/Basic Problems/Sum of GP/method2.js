// Function to calculate sum of geometric series
function sumOfGP(a, r, n) {
	// calculating and storing sum
	return (a * (1 - Math.pow(r, n))) / (1 - r);
}

// Driver code
function main() {
	let a = 2; // first term
	let r = 2; // common ratio
	let n = 15; // number of terms

	console.log(sumOfGP(a, r, n));
}

// Run the main function
main();
