#include <bits/stdc++.h>
using namespace std;

// Iterative Function to calculate 
// (x^y)%p in O(log y) */
int power(int x, int y, int p)
{
	// Initialize result
	int res = 1; 

	// Update x if it is more than or
	// equal to p
	x = x % p; 

	while (y > 0) {

		// If y is odd, multiply x with result
		if (y & 1)
			res = (res * x) % p;

		// y must be even now
		y = y >> 1; // y = y/2
		x = (x * x) % p;
	}

	return res;
}

// function to find nearest element in common
int NearestElement(int A, int D, int P)
{
	// base conditions
	if (A == 0)
		return 0;

	else if (D == 0)
		return -1;

	else {
		int X = power(D, P - 2, P);
		return (X * (P - A)) % P;
	}
}

// Driver code
int main()
{
	int A = 4, D = 9, P = 11;

	// module both A and D
	A %= P;
	D %= P;

	// function call
	cout << NearestElement(A, D, P);

	return 0;
}
