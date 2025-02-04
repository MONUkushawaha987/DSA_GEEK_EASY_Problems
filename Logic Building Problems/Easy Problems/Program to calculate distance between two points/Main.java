
import java.lang.Math;

public class Main {

	// Function to calculate distance
	public static double distance(double x1, double y1,
								double x2, double y2)
	{
		return Math.sqrt(Math.pow((x2 - x1), 2)
						+ Math.pow((y2 - y1), 2));
	}

	// Driver Code
	public static void main(String[] args)
	{
		System.out.println(distance(3, 4, 4, 3));
	}
}
