

	// JavaScript program to find prime 
	// factors of LCM of array elements 
	
	let MAX = 1000000; 
	
	// array to store all prime less 
	// than and equal to 10^6 
	let primes = []; 

	// utility function for sieve of sundaram 
	function sieve() 
	{ 
		let n = MAX; 

		// In general Sieve of Sundaram, 
		// produces primes smaller than 
		// (2*x + 2) for a number given 
		// number x. Since we want primes 
		// smaller than n, we reduce n to half 
		let nNew = parseInt((n) / 2, 10); 

		// This array is used to separate 
		// numbers of the form i+j+2ij 
		// from others where 1 <= i <= j 
		let marked = new Array(nNew + 100); 
		marked.fill(false); 


		// Main logic of Sundaram. Mark all 
		// numbers which do not generate 
		// prime number by doing 2*i+1 
		let tmp = parseInt(Math.sqrt(n), 10); 
		for (let i = 1; i <= parseInt((tmp - 1) / 2, 10); i++) 
			for (let j = (i * (i + 1)) << 1; j <= nNew; 
			j = j + 2 * i + 1) 
				marked[j] = true; 

		// Since 2 is a prime number 
		primes.push(2); 

		// Print other primes. Remaining 
		// primes are of the form 2*i + 1 
		// such that marked[i] is false. 
		for (let i = 1; i <= nNew; i++) 
			if (marked[i] == false) 
				primes.push(2 * i + 1); 
	} 

	// Function to find prime factors 
	// of n elements of given array 
	function primeLcm(arr, n) 
	{ 
		// factors[] --> array to 
		// mark all prime factors 
		// of lcm of array elements 
		let factors = new Array(MAX); 

		// One by one calculate prime 
		// factors of number and mark 
		// them in factors[] array 
		for (let i = 0; i < n; i++) 
		{ 
			// copy --> duplicate of original 
			// element to perform operation 
			let copy = arr[i]; 

			// sqr --> square root of current 
			// number 'copy' because all prime 
			// factors are always less than and 
			// equal to square root of given number 
			let sqr = parseInt(Math.sqrt(copy), 10); 

			// check divisibility with prime factor 
			for (let j = 0; primes[j] <= sqr; j++) 
			{ 
				// if current prime number is factor of 'copy' 
				if (copy % primes[j] == 0) 
				{ 
					// divide with current prime factor until 
					// it can divide the number 
					while (copy % primes[j] == 0) 
						copy = parseInt(copy / primes[j], 10); 

					// mark current prime factor as 1 in 
					// factors[] array 
					factors[primes[j]] = 1; 
				} 
			} 

			// After calculating exponents of all prime factors 
			// either value of 'copy' will be 1 because of 
			// complete divisibility or remaining value of 
			// 'copy' will be surely a prime , so we will 
			// also mark this prime as a factor 
			if (copy > 1) 
				factors[copy] = 1; 
		} 

		// if 2 is prime factor of lcm of all elements 
		// in given array 
		if (factors[2] == 1) 
			document.write("2 "); 

		// traverse to print all prime factors of lcm of 
		// all elements in given array 
		for (let i = 3; i <= MAX; i = i + 2) 
			if (factors[i] == 1) 
				document.write(i+" "); 
	} 
	
	sieve(); 
	let arr = [20, 10, 15, 60]; 
	let n = arr.length; 
	primeLcm(arr, n); 
