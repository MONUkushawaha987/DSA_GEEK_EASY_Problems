
// Javascript program to count the
// number of composite numbers
// in the given array


// Function that returns the
// the count of composite numbers

let sum = 0;
function compositeCount(arr, n) 
{

	// Find maximum value in the array
	let max_val = arr.sort((a, b) => b - a)[0];

	// Use sieve to find all prime numbers
	// less than or equal to max_val
	// Create a boolean array "prime[0..n]". A
	// value in prime[i] will finally be false
	// if i is Not a prime, else true.
	let prime = new Array(max_val + 1).fill(true);

	// Set 0 and 1 as primes as
	// they don't need to be
	// counted as composite numbers
	prime[0] = true;
	prime[1] = true;
	for (let p = 2; p * p <= max_val; p++) {

		// If prime[p] is not changed, then
		// it is a prime
		if (prime[p] == true) {

			// Update all multiples of p
			for (let i = p * 2; i <= max_val; i += p)
				prime[i] = false;
		}
	}

	// Count all composite
	// numbers in the arr[]
	let count = 0;
	for (let i = 0; i < n; i++)
		if (!prime[arr[i]]) {
			count++;
			sum = sum + arr[i];
		}

	return count;
}

// Driver code

let arr = new Array(1, 2, 3, 4, 5, 6, 7);
let n = arr.length;

document.write("Count of Composite Numbers = " + compositeCount(arr, n, sum));

document.write("<br>Sum of Composite Numbers = " + sum);
