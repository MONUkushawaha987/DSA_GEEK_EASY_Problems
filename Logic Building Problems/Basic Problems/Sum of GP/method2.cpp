// An Efficient solution to solve sum of geometric series.
#include<bits/stdc++.h>
using namespace std;

// function to calculate sum of 
// geometric series
float sumOfGP(float a, float r, int n)
{
	// calculating and storing sum
	return (a * (1 - pow(r, n))) / (1 - r);
}

// driver code
int main()
{
	float a = 2; // first term
	float r = 2; // common ratio
	int n = 15; // number of terms

	cout << sumOfGP(a, r, n);
	return 0;
}
