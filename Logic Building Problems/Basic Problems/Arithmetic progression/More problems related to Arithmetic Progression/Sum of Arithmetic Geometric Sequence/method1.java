// Java Program to find the sum of first n terms.
import java.io.*;

class Main {
	
	// Return the sum of first n term of AGP
	static int sumofNterm(int a, int d, int b, int r, int n)
	{	 
		// finding the each term of AGP and adding
		// it to sum.
		int sum = 0;
		for (int i = 1; i <= n ; i++) 
			sum += ((a + (i -1) * d) * (b * Math.pow(r, i - 1))); 
		return sum;
	}
	
	
	// Driven Program
	public static void main(String args[])
	{
		int a = 1, d = 1, b = 2, r = 2, n = 3;
		System.out.println(sumofNterm(a, d, b, r, n));
		
	}
}

