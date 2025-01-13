// Java implementation to print
// all the triplets in given array
// that form Arithmetic Progression

// import java.io.*;

class Main 
{
	
	// Function to print all triplets in
	// given sorted array that forms AP
	static void findAllTriplets(int arr[], int n)
	{
		
		for (int i = 1; i < n - 1; i++) 
		{
	
			// Search other two elements 
			// of AP with arr[i] as middle.
			for (int j = i - 1, k = i + 1; j >= 0 && k < n;)
			{
				
				// if a triplet is found
				if (arr[j] + arr[k] == 2 * arr[i]) 
				{
					System.out.println(arr[j] +" " + 
									arr[i]+ " " + arr[k]);
	
					// Since elements are distinct,
					// arr[k] and arr[j] cannot form
					// any more triplets with arr[i]
					k++;
					j--;
				}
	
				// If middle element is more move to 
				// higher side, else move lower side.
				else if (arr[j] + arr[k] < 2 * arr[i]) 
					k++;		 
				else
					j--;		 
			}
		}
	}

	// Driver code
	public static void main (String[] args) 
	{
		
		int arr[] = { 2, 6, 9, 12, 17, 
					22, 31, 32, 35, 42 };
		int n = arr.length;
		
		findAllTriplets(arr, n);
	}
}


