// Java code to calculate ratio
// import java.io.*;

class Nth {
	
// function to calculate ratio of mth and nth term
float CalculateRatio(float m, float n)
{
	// ratio will be tm/tn = (2*m - 1)/(2*n - 1)
	return (2 * m - 1) / (2 * n - 1);
}
}

// Driver code
class Main {
	
	public static void main (String[] args) {
	float m = 6, n = 2;
	Nth a=new Nth();
	System.out.println(a.CalculateRatio(m, n));

	}
}

