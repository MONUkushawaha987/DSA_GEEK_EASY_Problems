// JavaScript Program for Lucas Primality Test 

// A function to shuffle the array. 
function shuffle(arr){
	for(let i = arr.length-1; i>0;i--){
		// have a random index from [0, arr.length-1]
		let j = Math.floor(Math.random() * (i+1));
		
		// swap the original and random index element
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

// function to generate prime factors of n 
function primeFactors(n, factors) { 
	// if 2 is a factor 
	if (n % 2 == 0){
		factors.push(2); 
	}
		
	while (n % 2 == 0){
		n = n / 2; 
	}
				
	// if prime > 2 is factor 
	for (let i = 3; i <= Math.sqrt(n); i += 2) { 
		if (n % i == 0){
			factors.push(i); 
		}
			
		while (n % i == 0){
			n = n / i; 
		}		 
	} 
	if (n > 2){
		factors.push(n); 
	} 
} 

// this function produces power modulo 
// some number. It can be optimized to 
// using 
function power(n, r, q) { 
	let total = n; 
	for (let i = 1; i < r; i++){
		total = (total * n) % q; 
	}	 
	return total; 
} 

function lucasTest(n) {
	
	// Base cases 
	if (n == 1){
		return "neither prime nor composite"; 
	}	 
	if (n == 2){
	return "prime"; 
	}	 
	if (n % 2 == 0){
		return "composite1"; 
	}
				
	// Generating and storing factors 
	// of n-1 
	const factors = [];
	primeFactors(n - 1, factors); 

	// Array for random generator. This array 
	// is to ensure one number is generated 
	// only once 
	const random = [];
	for (let i = 0; i < n - 2; i++){
		// random[i] = i + 2; 
		random.push(i+2);
	}
		
	// shuffle random array to produce randomness 
	shuffle(random); 

	// Now one by one perform Lucas Primality 
	// Test on random numbers generated. 
	for (let i = 0; i < n - 2; i++) { 
		let a = random[i]; 
		if (power(a, n - 1, n) != 1){
			return "composite";	 
		}
			
		// this is to check if every factor 
		// of n-1 satisfy the condition 
		let flag = true; 
		for (let k = 0; k < factors.length; k++) { 
			// if a^((n-1)/q) equal 1 
			if (power(a, (n - 1) / factors[k], n) == 1) { 
				flag = false; 
				break; 
			} 
		} 

		// if all condition satisfy 
		if (flag){
			return "prime"; 
		}
			
	} 
	return "probably composite"; 
} 

// Driver code 
{ 
	console.log( 7 + " is " + lucasTest(7));
	console.log( 9 + " is " + lucasTest(9));
	console.log( 37 + " is " + lucasTest(37));
	return 0; 
} 

