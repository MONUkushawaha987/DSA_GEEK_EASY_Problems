// CPP program to check given number y
// is power of x
#include <iostream>
#include <math.h>
using namespace std;

bool isPower(int x, int y)
{
	// logarithm function to calculate value
	float res1 = log(y) / log(x);
	return res1==floor(res1);
}

// Driven program
int main()
{
	cout << isPower(2, 128) << endl;
	return 0;
}
 