// CPP program to find probability that 3 randomly chosen numbers form AP.
#include <bits/stdc++.h>
using namespace std;

// function to calculate probability
double procal(int n)
{
	return (3.0 * n) / (4.0 * (n * n) - 1);
}

// Driver code to run above function
int main()
{
	int a[] = { 1, 2, 3, 4, 5 };
	int n = sizeof(a)/sizeof(a[0]);
	cout << procal(n);
	return 0;
}
