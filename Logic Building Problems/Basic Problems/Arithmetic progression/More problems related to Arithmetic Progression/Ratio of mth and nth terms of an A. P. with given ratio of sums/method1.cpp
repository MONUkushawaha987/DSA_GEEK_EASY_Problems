// C++ code to calculate ratio
#include <bits/stdc++.h>
using namespace std;

// function to calculate ratio of mth and nth term
float CalculateRatio(float m, float n)
{
	// ratio will be tm/tn = (2*m - 1)/(2*n - 1)
	return (2 * m - 1) / (2 * n - 1);
}

// Driver code
int main()
{
	float m = 6, n = 2;
	cout << CalculateRatio(m, n);

	return 0;
}
