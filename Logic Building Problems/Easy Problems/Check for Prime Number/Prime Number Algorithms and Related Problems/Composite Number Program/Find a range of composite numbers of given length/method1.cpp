// C++ program to find a range of  composite numbers of given length
#include <bits/stdc++.h>
using namespace std;

// method to find factorial
// of given number
int factorial (int n)
{
	if (n == 0)
		return 1;

	return n * factorial(n-1);
}

// to print range of length n
// having all composite integers
int printRange(int n)
{
int a = factorial(n + 2) + 2;
int b = a + n - 1;
cout << "[" << a << ", " << b << "]";
return 0;
}

// Driver method
int main()
{
	int n = 3 ;
	printRange(n);
	return 0;
}
