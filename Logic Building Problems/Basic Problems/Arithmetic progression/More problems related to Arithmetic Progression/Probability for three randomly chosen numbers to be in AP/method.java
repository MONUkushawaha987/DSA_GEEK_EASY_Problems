// Java program to find probability that
// 3 randomly chosen numbers form AP.

class Main {
	
	// function to calculate probability
	static double procal(int n)
	{
		return (3.0 * n) / (4.0 * (n * n) - 1);
	}

	// Driver code to run above function
	public static void main(String arg[])
	{
		int a[] = { 1, 2, 3, 4, 5 };
		int n = a.length;
		System.out.print(Math.round(procal(n) * 1000000.0) / 1000000.0);
	}
}


