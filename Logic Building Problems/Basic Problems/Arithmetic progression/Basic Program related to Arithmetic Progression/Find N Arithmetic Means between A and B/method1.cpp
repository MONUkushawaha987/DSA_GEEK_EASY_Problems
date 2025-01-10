// C++ program to find n arithmetic means between A and B
#include <bits/stdc++.h>
using namespace std;

// Prints N arithmetic means between
// A and B.
void printAMeans(int A, int B, int N)
{
	// calculate common difference(d)
	float d = (float)(B - A) / (N + 1);
	
	// for finding N the arithmetic 
	// mean between A and B
	for (int i = 1; i <= N; i++) 
		cout << (A + i * d) <<" "; 
}

// Driver code to test above 
int main()
{
	int A = 20, B = 32, N = 5;
	printAMeans(A, B, N); 
	return 0;
}
