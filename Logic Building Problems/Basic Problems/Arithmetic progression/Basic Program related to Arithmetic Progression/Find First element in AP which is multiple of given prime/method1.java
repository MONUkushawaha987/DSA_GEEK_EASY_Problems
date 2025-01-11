// Java Program to Find First
// element in AP which is 
// multiple of given prime
class Main
{
// Iterative Function to 
// calculate (x^y)%p in
// O(log y) */
static int power(int x, 
				int y, int p)
{
	// Initialize result
	int res = 1; 

	// Update x if it is 
	// more than or equal to p
	x = x % p; 

	while (y > 0)
	{

		// If y is odd, multiply
		// x with result
		if ((y & 1) != 0)
			res = (res * x) % p;

		// y must be even now
		y = y >> 1; // y = y/2
		x = (x * x) % p;
	}

	return res;
}

// function to find nearest
// element in common
static int NearestElement(int A, 
						int D, int P)
{
	// base conditions
	if (A == 0)
		return 0;

	else if (D == 0)
		return -1;

	else
	{
		int X = power(D, P - 2, P);
		return (X * (P - A)) % P;
	}
}

// Driver code
public static void main(String args[])
{
	int A = 4, D = 9, P = 11;

	// module both A and D
	A %= P;
	D %= P;

	// function call
	System.out.println(NearestElement(A, D, P));
}
}


