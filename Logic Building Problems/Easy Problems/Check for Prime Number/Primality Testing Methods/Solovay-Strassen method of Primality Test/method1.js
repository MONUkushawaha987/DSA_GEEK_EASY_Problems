
// Javascript program to implement Solovay-Strassen 
// Primality Test 

	
// Modulo function to perform 
// binary exponentiation 
function modulo( base, exponent,mod) 
{ 
	let x = 1; 
	let y = base; 
	
	while (exponent > 0) 
	{ 
		if (exponent % 2 == 1) 
			x = (x * y) % mod; 

		y = (y * y) % mod; 
		exponent = Math.floor(exponent / 2); 
		
	} 
	return x % mod; 
} 

// To calculate Jacobian symbol of 
// a given number 
function calculateJacobian( a, n) 
{ 
	if (n <= 0 || n % 2 == 0) 
		return 0; 
		
	let ans = 1; 
	
	if (a < 0) 
	{ 
		a = -a; // (a/n) = (-a/n)*(-1/n) 
		if (n % 4 == 3) 
			ans = -ans; // (-1/n) = -1 if n = 3 (mod 4) 
	} 
	
	if (a == 1) 
		return ans; // (1/n) = 1 
		
	while (a != 0) 
	{ 
		if (a < 0) 
		{ 
			a = -a; // (a/n) = (-a/n)*(-1/n) 
			if (n % 4 == 3) 
				ans = -ans; // (-1/n) = -1 if n = 3 (mod 4) 
		} 
		
		while (a % 2 == 0) 
		{ 
			a = Math.floor(a/2); 
			if (n % 8 == 3 || n % 8 == 5) 
				ans = -ans; 
		} 

		let temp= a; 
		a = n; 
		n = temp; 

		if (a % 4 == 3 && n % 4 == 3) 
			ans = -ans; 
			
		a %= n; 
		if (a > Math.floor(n / 2)) 
			a = a - n; 
	} 
	
	if (n == 1) 
		return ans; 
		
	return 0; 
} 
	
// To perform the Solovay-Strassen Primality Test 
function solovoyStrassen( p, iteration) 
{ 
	if (p < 2) 
		return false; 
	if (p != 2 && p % 2 == 0) 
		return false; 
		
	
	for(let i = 0; i < iteration; i++) 
	{ 
		
		// Generate a random number r 
		let r = Math.floor(Math.random()* (Number.MAX_VALUE, 2) );	 
		let a = r % (p - 1) + 1; 
		let jacobian = (p + calculateJacobian(a, p)) % p; 
		let mod = modulo(a, Math.floor((p - 1) / 2), p); 
		
		if (jacobian == 0 || mod != jacobian) 
			return false; 
	} 
	return true;	 
} 


// Driver Code 

let iter = 50; 
let num1 = 15; 
let num2 = 13; 
	
if (solovoyStrassen(num1, iter)) 
	document.write(num1 + " is prime"+ "</br>"); 
else
	document.write(num1 + " is composite" + "</br>"); 
	
if (solovoyStrassen(num2,iter)) 
	document.write(num2 + " is prime"+ "</br>"); 
else
	document.write(num2 + " is composite"+ "</br>"); 

