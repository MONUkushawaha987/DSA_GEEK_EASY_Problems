
// Javascript program to find 
// the highest occurring digit
// in prime numbers in a range L to R.
	
	// Sieve of Eratosthenes
	function sieve(prime,n)
	{
		for (let p = 2; p * p <= n; p++) {
			if (prime[p] == false)
				for (let i = p * 2; i <= n; i += p)
					prime[i] = true;
		}
	}
	
	// Returns maximum occurring digits in primes
	// from l to r.
	function maxDigitInPrimes(L,R)
	{
		let prime=new Array(R+1);
		for(let i=0;i<R+1;i++)
		{
			prime[i]=false;
		}
		// Finding the prime number up to R.
		sieve(prime, R);
		
		let freq=new Array(10);
		for(let i=0;i<10;i++)
		{
			freq[i]=0;
		}
		let val;
		// For all number between L to R, check if 
		// prime or not. If prime, incrementing 
		// the frequency of digits present in the 
		// prime number.
		for (let i = L; i <= R; i++) {

			if (!prime[i]) {
				let p = i; // If i is prime

				while (p > 0) {
				freq[p % 10]++;
				p = Math.floor(p/10);
				}
			}
		}
	
		// Finding digit with highest frequency.
		let max = freq[0], ans = 0;

		for (let j = 1; j < 10; j++) {
			if (max <= freq[j]) {
				max = freq[j];
				ans = j;
			}
		}
	
		return ans;
	}
	
	// Driver code
	let L = 1, R = 20;
	document.write(maxDigitInPrimes(L, R));
	
	