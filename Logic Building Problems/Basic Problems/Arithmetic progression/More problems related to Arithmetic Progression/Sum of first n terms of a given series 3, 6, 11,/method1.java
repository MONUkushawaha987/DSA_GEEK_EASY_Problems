// Java program to find sum of first n terms

import java.io.*;

class Main {

// Function to calculate the sum
static int calculateSum(int n)
{
	// starting number
	int a1 = 1, a2 = 2;

	// Common Ratio
	int r = 2;

	// Common difference
	int d = 1;

	return (n) * (2 * a1 + (n - 1) * d) / 2 + a2 
			* (int)(Math.pow(r, n) - 1) / (r - 1);
}

// Driver code
	public static void main (String[] args) {
		// N th term to be find
	int n = 5;

	// find the Sn
	System.out.print( "Sum = " + calculateSum(n));
	}
}

