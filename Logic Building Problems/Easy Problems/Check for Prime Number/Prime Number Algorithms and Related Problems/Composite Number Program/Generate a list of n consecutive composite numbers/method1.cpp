// CPP program to print n consecutive composite numbers.
#include <iostream>
using namespace std;

// function to find factorial of given 
// number
unsigned long long int factorial(unsigned int n)
{ 
	unsigned long long int res = 1;
	for (int i=2; i<=n; i++)
		res *= i;
	return res;
}

// Prints n consecutive numbers. 
void printNComposite(int n)
{
	unsigned long long int fact = factorial(n+1);
	for (int i = 2; i <= n+1; ++i) 
		cout << fact + i << " "; 
}

// Driver program to test above function
int main()
{
	int n = 4;
	printNComposite(n);
	return 0;
}
