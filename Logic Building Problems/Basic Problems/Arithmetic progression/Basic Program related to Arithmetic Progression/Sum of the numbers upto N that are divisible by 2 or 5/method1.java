// Java implementation of 
// above approach
import java.lang.*; 
import java.util.*; 

class Main 
{ 

// Function to find the sum 
static long findSum(int n) 
{ 
	long sum2, sum5, sum10; 
	
	// sum2 is sum of numbers 
	// divisible by 2 
	sum2 = ((n / 2) * (4 + 
			(n / 2 - 1) * 2)) / 2; 
	
	// sum5 is sum of number 
	// divisible by 5 
	sum5 = ((n / 5) * (10 + 
			(n / 5 - 1) * 5)) / 2; 
	
	// sum10 of numbers divisible 
	// by 2 and 5 
	sum10 = ((n / 10) * (20 + 
			(n / 10 - 1) * 10)) / 2; 
	
	return sum2 + sum5 - sum10; 
} 

// Driver code 
public static void main (String[] args) 
{
	int n = 5; 
	System.out.println(findSum(n)); 
}
} 


