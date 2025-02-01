// Java program to find prime 
// factors of LCM of array elements 
import java.util.*; 

class Main 
{ 

static int MAX = 1000000; 

// array to store all prime less 
// than and equal to 10^6 
static ArrayList<Integer> primes = new ArrayList<Integer>(); 

// utility function for sieve of sundaram 
static void sieve() 
{ 
	int n = MAX; 

	// In general Sieve of Sundaram, 
	// produces primes smaller than 
	// (2*x + 2) for a number given 
	// number x. Since we want primes 
	// smaller than n, we reduce n to half 
	int nNew = (n) / 2; 

	// This array is used to separate 
	// numbers of the form i+j+2ij 
	// from others where 1 <= i <= j 
	boolean[] marked = new boolean[nNew + 100]; 


	// Main logic of Sundaram. Mark all 
	// numbers which do not generate 
	// prime number by doing 2*i+1 
	int tmp = (int)Math.sqrt(n); 
	for (int i = 1; i <= (tmp - 1) / 2; i++) 
		for (int j = (i * (i + 1)) << 1; 
				j <= nNew; j = j + 2 * i + 1) 
			marked[j] = true; 

	// Since 2 is a prime number 
	primes.add(2); 

	// Print other primes. Remaining 
	// primes are of the form 2*i + 1 
	// such that marked[i] is false. 
	for (int i = 1; i <= nNew; i++) 
		if (marked[i] == false) 
			primes.add(2 * i + 1); 
} 

// Function to find prime factors 
// of n elements of given array 
static void primeLcm(int[] arr, int n ) 
{ 
	// factors[] --> array to mark all prime 
	// factors of lcm of array elements 
	int[] factors = new int[MAX]; 

	// One by one calculate prime factors of number 
	// and mark them in factors[] array 
	for (int i = 0; i < n; i++) 
	{ 
		// copy --> duplicate of original element to 
		// perform operation 
		int copy = arr[i]; 

		// sqr --> square root of current number 'copy' 
		// because all prime factors are always less 
		// than and equal to square root of given number 
		int sqr = (int)Math.sqrt(copy); 

		// check divisibility with prime factor 
		for (int j = 0; primes.get(j) <= sqr; j++) 
		{ 
			// if current prime number is factor of 'copy' 
			if (copy % primes.get(j) == 0) 
			{ 
				// divide with current prime factor until 
				// it can divide the number 
				while (copy % primes.get(j) == 0) 
					copy = copy / primes.get(j); 

				// mark current prime factor as 1 in 
				// factors[] array 
				factors[primes.get(j)] = 1; 
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
		System.out.print("2 "); 

	// traverse to print all prime factors of lcm of 
	// all elements in given array 
	for (int i = 3; i <= MAX; i = i + 2) 
		if (factors[i] == 1) 
			System.out.print(i+" "); 
} 

// Driver code 
public static void main (String[] args) 
{ 
	sieve(); 
	int[] arr = {20, 10, 15, 60}; 
	int n = arr.length; 
	primeLcm(arr, n); 
} 
} 
