// JS program to find the sum and
// product of k smallest and k largest
// composite numbers in an array
function SieveOfEratosthenes(max_val)
{

	// Create a boolean vector "prime[0..n]". A
	// value in prime[i] will finally be false
	// if i is Not a prime, else true.
	let prime = new Array(max_val + 1).fill(true);
	for (var p = 2; p * p <= max_val; p++) {

		// If prime[p] is not changed, then
		// it is a prime
		if (prime[p] == true) {

			// Update all multiples of p
			for (var i = p * 2; i <= max_val; i += p)
				prime[i] = false;
		}
	}
	return prime;
}

// Function that calculates the sum
// and product of k smallest and k
// largest composite numbers in an array
function compositeSumAndProduct(arr, n, k)
{
	// Find maximum value in the array
	let max_val = Math.max(...arr) 

	// Use sieve to find all prime numbers
	// less than or equal to max_val
	let prime = SieveOfEratosthenes(max_val);

	// Set 0 and 1 as primes so that
	// they don't get counted as 
	// composite numbers
	prime[0] = true;
	prime[1] = true;

	// Max Heap to store all the composite numbers
	let maxHeap = [];

	// Min Heap to store all the composite numbers
	let minHeap = [];

	// Push all the composite numbers 
	// from the array to the heaps
	for (var i = 0; i < n; i++)
		if (!prime[arr[i]]) {
			minHeap.push(arr[i]);
			maxHeap.push(arr[i]);
		}
		
	minHeap.sort(function(a, b) { return a > b});
	maxHeap.sort(function(a, b) { return a < b});

	let minProduct = 1
		, maxProduct = 1
		, minSum = 0
		, maxSum = 0;
	while (k-- > 0) {
		
		// Calculate the products
		minProduct *= minHeap[0];
		maxProduct *= maxHeap[0];

		// Calculate the sum
		minSum += minHeap[0];
		maxSum += maxHeap[0];

		// Pop the current minimum element
		minHeap.shift();

		// Pop the current maximum element
		maxHeap.shift();
	}

	console.log("Sum of k-minimum composite numbers is "
		+ minSum)
	console.log("Sum of k-maximum composite numbers is "
		+ maxSum);
	console.log("Product of k-minimum composite numbers is "
		+ minProduct);
	console.log("Product of k-maximum composite numbers is "
		+ maxProduct);

}

// Driver code
let arr = [ 6, 4, 2, 12, 13, 5, 19, 10];
let n = arr.length;

let k = 3;

compositeSumAndProduct(arr, n, k);
