// java program to illustrate
// n arithmetic mean between 
// A and B
import java.io.*;
import java.lang.*;
import java.util.*;

public class Main {

	// insert function for calculating the means
	static void printAMeans(int A, int B, int N)
	{	 
		// Finding the value of d Common difference
		float d = (float)(B - A) / (N + 1);
							
		// for finding N the Arithmetic 
		// mean between A and B
		for (int i = 1; i <= N; i++) 
		System.out.print((A + i * d) + " ");
		
	}

	// Driver code
	public static void main(String args[])
	{
		int A = 20, B = 32, N = 5;
		printAMeans(A, B, N);
	}
}
