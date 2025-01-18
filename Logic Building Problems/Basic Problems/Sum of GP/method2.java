// An Efficient solution to solve sum of 
// geometric series.
import java.math.*;

class Main{
	
	// function to calculate sum of 
	// geometric series
	static float sumOfGP(float a, float r, int n)
	{
		// calculating and storing sum
		return (a * (1 - (int)(Math.pow(r, n)))) / 
											(1 - r);
	}

	// driver code
	public static void main(String args[])
	{
		float a = 2; // first term
		float r = 2; // common ratio
		int n = 15; // number of terms

		System.out.println((int)(sumOfGP(a, r, n)));
	}
}

