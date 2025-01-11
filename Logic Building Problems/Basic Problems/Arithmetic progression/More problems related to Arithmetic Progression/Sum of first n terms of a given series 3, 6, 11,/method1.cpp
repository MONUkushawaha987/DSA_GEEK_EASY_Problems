// C++ program to find sum of first n terms
#include <bits/stdc++.h>
using namespace std;

// Function to calculate the sum
int calculateSum(int n)
{
	// starting number
	int a1 = 1, a2 = 2;

	// Common Ratio
	int r = 2;

	// Common difference
	int d = 1;

	return (n) * (2 * a1 + (n - 1) * d) / 2 + a2 
			* (pow(r, n) - 1) / (r - 1);
}

// Driver code
int main()
{

	// N th term to be find
	int n = 5;

	// find the Sn
	cout << "Sum = " << calculateSum(n);

	return 0;
}
