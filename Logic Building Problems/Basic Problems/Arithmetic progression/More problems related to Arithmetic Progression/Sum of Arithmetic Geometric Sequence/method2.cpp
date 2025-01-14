// CPP Program to find the sum of first n terms.
#include<bits/stdc++.h>
using namespace std;

// Return the sum of first n term of AGP
int sumofNterm(int a, int d, int b, int r, int n)
{
	int ans = 0; 
	ans += a; 
	ans += ((d * r * (1 - pow(r, n-1)))/(1-r)); 
	ans -= (a + (n-1)*d)*pow(r, n); 
	return (ans*b)/(1-r);
}

// Driven Program
int main()
{
	int a = 1, d = 1, b = 2, r = 2, n = 3;
	cout << sumofNterm(a, d, b, r, n) << endl;
	return 0;
} 
