// JavaScript program to check given number y
// is power of x

function isPower(x, y) {
	// logarithm function to calculate value
	const res1 = Math.log(y) / Math.log(x);
	const res2 = Math.log(y) / Math.log(x);
	
	// compare to the result1 or result2 both are equal
	return (res1 === res2);
}

// Driven program
console.log(isPower(2, 128));
