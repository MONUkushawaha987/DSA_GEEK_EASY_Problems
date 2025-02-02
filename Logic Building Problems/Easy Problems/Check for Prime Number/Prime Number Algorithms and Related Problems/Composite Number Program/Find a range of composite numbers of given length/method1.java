// Java program to find a range of composite 
// numbers of given length

class Test
{
	// method to find factorial of given number
	static int factorial(int n)
	{
		if (n == 0)
		return 1;
		
		return n*factorial(n-1);
	}
	
	// to print range of length n
	// having all composite integers 
	static void printRange(int n)
	{
	int a = factorial(n + 2) + 2;
	int b = a + n - 1;
	System.out.println("[" + a + ", " + b + "]");
	}
	
	// Driver method
	public static void main(String args[]) throws Exception
	{
		int n = 3 ; 
		printRange(n);
	}
}
