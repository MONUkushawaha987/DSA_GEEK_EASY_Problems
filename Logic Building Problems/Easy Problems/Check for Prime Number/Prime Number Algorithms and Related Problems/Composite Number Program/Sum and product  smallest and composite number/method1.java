// Java program to find the sum and  product of k smallest and k largest  composite numbers in an array 
import java.util.*;

class Main
{
	static boolean[] SieveOfEratosThenes(int max_val) 
	{

		// Create a boolean vector "prime[0..n]". A
		// value in prime[i] will finally be false
		// if i is Not a prime, else true.
		boolean[] prime = new boolean[max_val + 1];
		Arrays.fill(prime, true);

		for (int p = 2; p * p <= max_val; p++) 
		{

			// If prime[p] is not changed, then
			// it is a prime
			if (prime[p]) 
			{

				// Update all multiples of p
				for (int i = p * 2; i <= max_val; i += p)
					prime[i] = false;
			}
		}
		return prime;
	}

	// Function that calculates the sum
	// and product of k smallest and k
	// largest composite numbers in an array
	static void compositeSumAndProduct(Integer[] arr, 
									int n, int k) 
	{

		// Find maximum value in the array
		int max_val = Collections.max(Arrays.asList(arr));

		// Use sieve to find all prime numbers
		// less than or equal to max_val
		boolean[] prime = SieveOfEratosThenes(max_val);

		// Set 0 and 1 as primes so that
		// they don't get counted as
		// composite numbers
		prime[0] = true;
		prime[1] = true;

		// Max Heap to store all the composite numbers
		PriorityQueue<Integer> maxHeap = 
				new PriorityQueue<Integer>((x, y) -> y - x);

		// Min Heap to store all the composite numbers
		PriorityQueue<Integer> minHeap = new PriorityQueue<>();

		// Push all the composite numbers
		// from the array to the heaps
		for (int i = 0; i < n; i++) 
		{
			if (!prime[arr[i]]) 
			{
				minHeap.add(arr[i]);
				maxHeap.add(arr[i]);
			}
		}

		long minProduct = 1, maxProduct = 1, 
				minSum = 0, maxSum = 0;
		Integer lastMin = 0, lastMax = 0;
		while (k-- > 0) 
		{
			if (minHeap.peek() != null || 
				maxHeap.peek() != null)
			{

				// Calculate the products
				minProduct *= minHeap.peek();
				maxProduct *= maxHeap.peek();

				// Calculate the sum
				minSum += minHeap.peek();
				maxSum += maxHeap.peek();

				// Pop the current minimum element
				lastMin = minHeap.poll();

				// Pop the current maximum element
				lastMax = maxHeap.poll();
			} 
			else
			{

				// when maxHeap or minHeap is exhausted 
				// then this condition will run
				minProduct *= lastMin;
				maxProduct *= lastMax;

				minSum += lastMin;
				maxSum += lastMax;
			}
		}

		System.out.println("Sum of k-minimum composite" + 
								" numbers is " + minSum);
		System.out.println("Sum of k-maximum composite" + 
								" numbers is " + maxSum);
		System.out.println("Product of k-minimum composite" + 
								" numbers is " + minProduct);
		System.out.println("Product of k-maximum composite" + 
								" numbers is " + maxProduct);
	}

	// Driver Code
	public static void main(String[] args)
	{
		Integer[] arr = { 4, 2, 12, 13, 5, 19 };
		int n = arr.length;
		int k = 3;

		compositeSumAndProduct(arr, n, k);
	}
}
