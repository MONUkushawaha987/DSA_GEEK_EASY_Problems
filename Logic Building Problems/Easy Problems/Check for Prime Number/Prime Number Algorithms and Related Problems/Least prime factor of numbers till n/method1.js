
// javascript program to print the least prime factors
// of numbers less than or equal to
// n using modified Sieve of Eratosthenes
function leastPrimeFactor( n)
{

	// Create a vector to store least primes.
	// Initialize all entries as 0.
	let least_prime = Array(n+1).fill(0);

	// We need to print 1 for 1.
	least_prime[1] = 1;

	for (let i = 2; i <= n; i++)
	{

		// least_prime[i] == 0
		// means it i is prime
		if (least_prime[i] == 0)
		{
		
			// marking the prime number
			// as its own lpf
			least_prime[i] = i;

			// mark it as a divisor for all its
			// multiples if not already marked
			for (let j = i*i; j <= n; j += i)
				if (least_prime[j] == 0)
				least_prime[j] = i;
		}
	}

	// print least prime factor of
	// of numbers till n
	for (let i = 1; i <= n; i++)
	document.write( "Least Prime factor of "
			+ i + ": " + least_prime[i] + "<br/>");
}

// Driver program to test above function
	let n = 10;
	leastPrimeFactor(n);
