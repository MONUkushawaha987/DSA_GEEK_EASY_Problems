	// function to calculate sum of 
	// geometric series
	function sumOfGP(a, r, n) {
		let sum = 0;
		for (let i = 0; i < n; i++) {
			sum = sum + a;
			a = a * r;
		}
		return sum;
	}

	// Driver code
	let a = 1; // first term
	let r = 0.5; // common ratio
	let n = 10; // number of terms

	console.log(sumOfGP(a, r, n))

