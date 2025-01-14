// Java Program to find the sum of first n terms.

import java.io.*;
import java.math.*;

class Main {
	
	// Return the sum of first n term of AGP
	static int sumofNterm(int a, int d, int b, int r, int n)
	{
		int ans = 0; 
		ans += a; 
		ans += ((d * r * (1 - (int)(Math.pow(r, n-1))))/(1-r)); 
		ans -= (a + (n-1)*d)*(int)(Math.pow(r, n)); 
		return (ans*b)/(1-r);
	}
	
	
	// Driven Program
	public static void main(String args[])
	{
		int a = 1, d = 1, b = 2, r = 2, n = 3;
		System.out.println(sumofNterm(a, d, b, r, n));
		
	}
}

