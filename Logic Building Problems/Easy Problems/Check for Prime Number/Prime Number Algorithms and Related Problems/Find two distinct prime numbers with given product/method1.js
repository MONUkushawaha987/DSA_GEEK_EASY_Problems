
// Javascript program to find a distinct prime number
// pair whose product is equal to given number

// Function to generate all
// prime numbers less than n
function SieveOfEratosthenes(n, isPrime)
{
	
	// Initialize all entries of bool
	// array as true. A value in
	// isPrime[i] will finally be false
	// if i is Not a prime, else true
	// isPrime[n+1];
	isPrime[0] = isPrime[1] = false;
	
	for(var i = 2; i <= n; i++)
		isPrime[i] = true;

	for(var p = 2; p * p <= n; p++)
	{
		
		// If isPrime[p] is not changed,
		// then it is a prime
		if (isPrime[p] == true)
		{
			
			// Update all multiples of p
			for(var i = p * 2; i <= n; i += p)
				isPrime[i] = false;
		}
	}
}

// Function to print a prime
// pair with given product
function findPrimePair(n)
{
	var flag = 0;

	// Generating primes using Sieve
	var isPrime = []
	SieveOfEratosthenes(n, isPrime);

	// Traversing all numbers to
	// find first pair
	for(var i = 2; i < n; i++)
	{
		var x = n / i;

		if (isPrime[i] && isPrime[x] &&
				x != i && x * i == n)
		{
			document.write(i + " " + x);
			flag = 1;
			return;
		}
	}

	if (flag == 0)
		document.write("No such pair found");
}

// Driver code
var n = 39;

findPrimePair(n);

