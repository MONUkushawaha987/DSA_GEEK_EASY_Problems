// C++ program to find the product of all the composite numbers in an array
#include <bits/stdc++.h>
using namespace std;

// Function that returns the
// the product of all composite numbers
int compositeProduct(int arr[], int n)
{
	// Find maximum value in the array
	int max_val = *max_element(arr, arr + n);

	// Use sieve to find all prime numbers
	// less than or equal to max_val
	// Create a boolean array "prime[0..n]". A
	// value in prime[i] will finally be false
	// if i is Not a prime, else true.
	vector<bool> prime(max_val + 1, true);

	// Set 0 and 1 as primes as
	// they don't need to be
	// counted as composite numbers
	prime[0] = true;
	prime[1] = true;
	for (int p = 2; p * p <= max_val; p++) {

		// If prime[p] is not changed, then
		// it is a prime
		if (prime[p] == true) {

			// Update all multiples of p
			for (int i = p * 2; i <= max_val; i += p)
				prime[i] = false;
		}
	}

	// Find the product of all
	// composite numbers in the arr[]
	int product = 1;
	for (int i = 0; i < n; i++)
		if (!prime[arr[i]]) {
			product *= arr[i];
		}

	return product;
}

// Driver code
int main()
{

	int arr[] = { 2, 3, 4, 5, 6, 7 };
	int n = sizeof(arr) / sizeof(arr[0]);

	cout << compositeProduct(arr, n);

	return 0;
}
