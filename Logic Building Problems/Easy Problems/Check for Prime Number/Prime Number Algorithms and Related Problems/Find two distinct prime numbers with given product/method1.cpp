// C++ program to find a distinct prime number pair whose product is equal to given number
#include <bits/stdc++.h>
using namespace std;

// Function to generate all prime
// numbers less than n
bool SieveOfEratosthenes(int n, bool isPrime[])
{
	// Initialize all entries of boolean array
	// as true. A value in isPrime[i] will finally
	// be false if i is Not a prime, else true
	// bool isPrime[n+1];
	isPrime[0] = isPrime[1] = false;
	for (int i = 2; i <= n; i++)
		isPrime[i] = true;

	for (int p = 2; p * p <= n; p++) {
		// If isPrime[p] is not changed, then it is
		// a prime
		if (isPrime[p] == true) {
			// Update all multiples of p
			for (int i = p * 2; i <= n; i += p)
				isPrime[i] = false;
		}
	}
}

// Function to print a prime pair
// with given product
void findPrimePair(int n)
{
	int flag = 0;

	// Generating primes using Sieve
	bool isPrime[n + 1];
	SieveOfEratosthenes(n, isPrime);

	// Traversing all numbers to find first
	// pair
	for (int i = 2; i < n; i++) {
		int x = n / i;

		if (isPrime[i] && isPrime[x] and x != i
			and x * i == n) {
			cout << i << " " << x;
			flag = 1;
			return;
		}
	}

	if (!flag)
		cout << "No such pair found";
}

// Driven Code
int main()
{
	int n = 39;

	findPrimePair(n);

	return 0;
}
