// Java Program to print an arithmetic
// progression series
class Main{
static void printAP(int a, int d, int n) 
{

	// Printing AP by simply adding d
	// to previous term.
	int curr_term;
curr_term=a;
	for (int i = 1; i <= n; i++) 
	{ System.out.print(curr_term + " ");
	curr_term =curr_term + d;
	
	}
}

// Driver code
public static void main(String[] args) 
{
// starting number
int a = 2; 

// Common difference
int d = 1; 

// N th term to be find
int n = 5; 

printAP(a, d, n);
}
}

