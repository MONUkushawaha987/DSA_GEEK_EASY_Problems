// Java program to check given 
// number y is power of x

class Main 
{
	static boolean isPower(int x, 
						int y)
	{
		// logarithm function to
		// calculate value
		float res1 = (float)(Math.log(y) / 
				Math.log(x));
					
		return (res1%1==0);
	}
	
	// Driver Code
	public static void main(String args[]) 
	{
		if(isPower(2, 128))
			System.out.println("1");
		else
			System.out.println("0");
	}
}
