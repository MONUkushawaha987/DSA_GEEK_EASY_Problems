// Java program to implement Solovay-Strassen  Primality Test 
import java.util.Scanner; 
import java.util.Random; 

class Main{ 
	
// Modulo function to perform 
// binary exponentiation 
static long modulo(long base, 
				long exponent, 
				long mod) 
{ 
	long x = 1; 
	long y = base; 
	
	while (exponent > 0) 
	{ 
		if (exponent % 2 == 1) 
			x = (x * y) % mod; 

		y = (y * y) % mod; 
		exponent = exponent / 2; 
		
	} 
	return x % mod; 
} 

// To calculate Jacobian symbol of 
// a given number 
static long calculateJacobian(long a, long n) 
{ 
	if (n <= 0 || n % 2 == 0) 
		return 0; 
		
	long ans = 1L; 
	
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
			a /= 2; 
			if (n % 8 == 3 || n % 8 == 5) 
				ans = -ans; 
		} 

		long temp = a; 
		a = n; 
		n = temp; 

		if (a % 4 == 3 && n % 4 == 3) 
			ans = -ans; 
			
		a %= n; 
		if (a > n / 2) 
			a = a - n; 
	} 
	
	if (n == 1) 
		return ans; 
		
	return 0; 
} 
	
// To perform the Solovay-Strassen Primality Test 
static boolean solovoyStrassen(long p, 
							int iteration) 
{ 
	if (p < 2) 
		return false; 
	if (p != 2 && p % 2 == 0) 
		return false; 
		
	// Create Object for Random Class 
	Random rand = new Random(); 
	for(int i = 0; i < iteration; i++) 
	{ 
		
		// Generate a random number r 
		long r = Math.abs(rand.nextLong());			 
		long a = r % (p - 1) + 1; 
		long jacobian = (p + calculateJacobian(a, p)) % p; 
		long mod = modulo(a, (p - 1) / 2, p); 
		
		if (jacobian == 0 || mod != jacobian) 
			return false; 
	} 
	return true;		 
} 

// Driver code 
public static void main (String[] args) 
{ 
	int iter = 50; 
	long num1 = 15; 
	long num2 = 13; 
	
	if (solovoyStrassen(num1, iter)) 
		System.out.println(num1 + " is prime"); 
	else
		System.out.println(num1 + " is composite");	 
	
	if (solovoyStrassen(num2,iter)) 
		System.out.println(num2 + " is prime"); 
	else
		System.out.println(num2 + " is composite"); 
} 
} 

