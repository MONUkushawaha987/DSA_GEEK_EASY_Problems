// C++ program to find the highest occurring digit in prime numbers in a range L to R.
#include<bits/stdc++.h>
using namespace std;

// Sieve of Eratosthenes
void sieve(bool prime[], int n)
{
	prime[0] = prime[1] = true;
	for (int p = 2; p * p <= n; p++)
	{
		if (prime[p] == false)
			for (int i = p*2; i <= n; i+=p)
				prime[i] = true;
	}
}

// Returns maximum occurring digits in primes
// from l to r.
int maxDigitInPrimes(int L, int R)
{
	bool prime[R+1];
	memset(prime, 0, sizeof(prime));

	// Finding the prime number up to R.
	sieve(prime, R);

	// Initialise frequency of all digit to 0.
	int freq[10] = { 0 };
	int val;

	// For all number between L to R, check if prime
	// or not. If prime, incrementing the frequency
	// of digits present in the prime number.
	for (int i = L; i <= R; i++)
	{
		if (!prime[i])
		{
			int p = i; // If i is prime
			while (p)
			{
				freq[p%10]++;
				p /= 10;
			}
		}
	}

	// Finding digit with highest frequency.
	int max = freq[0], ans = 0;
	for (int j = 1; j < 10; j++)
	{
		if (max <= freq[j])
		{
			max = freq[j];
			ans = j;
		}
	}

	return (max != 0)? ans: -1;
}

// Driven Program
int main()
{
	int L = 1, R = 20;

	cout << maxDigitInPrimes(L, R) << endl;
	return 0;
}
