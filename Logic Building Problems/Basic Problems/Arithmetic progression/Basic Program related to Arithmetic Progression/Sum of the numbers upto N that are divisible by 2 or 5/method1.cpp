// C++ implementation of above approach
#include <bits/stdc++.h>
#define ll long long int
using namespace std;

// Function to find the sum
ll findSum(int n)
{

	ll sum2, sum5, sum10;

	// sum2 is sum of numbers divisible by 2
	sum2 = ((n / 2) * (4 + (n / 2 - 1) * 2)) / 2;

	// sum5 is sum of number divisible by 5
	sum5 = ((n / 5) * (10 + (n / 5 - 1) * 5)) / 2;

	// sum10 of numbers divisible by 2 and 5
	sum10 = ((n / 10) * (20 + (n / 10 - 1) * 10)) / 2;

	return sum2 + sum5 - sum10;
}

// Driver code
int main()
{
	int n = 5;

	cout << findSum(n) << endl;
	return 0;
}
