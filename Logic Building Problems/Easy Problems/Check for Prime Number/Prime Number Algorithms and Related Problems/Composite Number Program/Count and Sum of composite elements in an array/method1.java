import java.util.*;

// Java program to count the 
// number of composite numbers 
// in the given array 

class Main
{

	static int sum = 0;
	
	// Function that returns the 
	// the count of composite numbers 
	static int compositeCount(int arr[], int n) 
	{
		// Find maximum value in the array 
		int max_val = Arrays.stream(arr).max().getAsInt();

		// Use sieve to find all prime numbers 
		// less than or equal to max_val 
		// Create a boolean array "prime[0..n]". A 
		// value in prime[i] will finally be false 
		// if i is Not a prime, else true. 
		Vector<Boolean> prime = new Vector<Boolean>(max_val + 1);
		for (int i = 0; i < max_val + 1; i++) 
		{
			prime.add(i, Boolean.TRUE);
		}
		// Set 0 and 1 as primes as 
		// they don't need to be 
		// counted as composite numbers 
		prime.add(0, Boolean.TRUE);
		prime.add(1, Boolean.TRUE);
		for (int p = 2; p * p <= max_val; p++) 
		{

			// If prime[p] is not changed, then 
			// it is a prime 
			if (prime.get(p) == true) 
			{

				// Update all multiples of p 
				for (int i = p * 2; i <= max_val; i += p) 
				{
					prime.add(i, Boolean.FALSE);
				}
			}
		}

		// Count all composite 
		// numbers in the arr[] 
		int count = 0;
		for (int i = 0; i < n; i++)
		{
			if (!prime.get(arr[i]))
			{
				count++;
				sum = sum + arr[i];
			}
		}
		return count;
	}

	// Driver code 
	public static void main(String[] args) 
	{
		int arr[] = {1, 2, 3, 4, 5, 6, 7};
		int n = arr.length;

		System.out.print("Count of Composite Numbers = "
				+ compositeCount(arr, n));

		System.out.print("\nSum of Composite Numbers = " + sum);
	}
}
