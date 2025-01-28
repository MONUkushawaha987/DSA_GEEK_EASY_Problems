
// javascript program to implement normal Sieve 
// of Eratosthenes using simple optimization 
// to reduce size of prime array to half and 
// reducing iterations. 
function normalSieve(n) 
{ 

		// prime[i] is going to store true if 
		// if i*2 + 1 is composite. 
		var prime = Array(n / 2).fill(false); 
		

		// 2 is the only even prime so we can 
		// ignore that. Loop starts from 3. 
		for (i = 3; i * i < n; i += 2) 
		{ 
		
			// If i is prime, mark all its 
			// multiples as composite 
			if (prime[parseInt(i / 2)] == false) 
				for (j = i * i; j < n; j += i * 2) 
					prime[parseInt(j / 2)] = true; 
		} 

		// writing 2 separately 
		document.write("2 "); 

		// Printing other primes 
		for (i = 3; i < n; i += 2) 
			if (prime[parseInt(i / 2)] == false) 
				document.write(i + " "); 
	} 
	
		var n = 100; 
		normalSieve(n); 

