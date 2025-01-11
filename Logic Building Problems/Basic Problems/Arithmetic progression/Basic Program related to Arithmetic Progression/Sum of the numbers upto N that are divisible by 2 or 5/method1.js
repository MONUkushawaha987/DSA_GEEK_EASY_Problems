
// Javascript implementation of above approach

// Function to find the sum
function findSum(n)
{

	var sum2, sum5, sum10;

	// sum2 is sum of numbers divisible by 2
	sum2 = parseInt((parseInt(n / 2) * 
	(4 + (parseInt(n / 2) - 1) * 2)) / 2);

	// sum5 is sum of number divisible by 5
	sum5 = parseInt((parseInt(n / 5) *
	(10 + (parseInt(n / 5) - 1) * 5)) / 2);

	// sum10 of numbers divisible by 2 and 5
	sum10 = parseInt((parseInt(n / 10) * 
	(20 + (parseInt(n / 10) - 1) * 10)) / 2);

	return sum2 + sum5 - sum10;
}

// Driver code
var n = 5;
document.write( findSum(n));


