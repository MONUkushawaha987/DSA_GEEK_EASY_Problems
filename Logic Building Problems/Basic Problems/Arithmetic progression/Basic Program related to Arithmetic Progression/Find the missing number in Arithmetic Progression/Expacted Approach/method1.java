// A Java program to find the missing number in
// a given arithmetic progression
class Main{
  
    // A binary search based recursive function that returns
  // the missing element in arithmetic progression
  static int findMissingUtil(int[] arr, int low, int high, int diff) {

      // There must be at least two elements to find the
      // missing element
      if (high <= low)
          return Integer.MAX_VALUE;

      // Find index of the middle element
      int mid = low + (high - low) / 2;

      // If the element just after the middle element is
      // missing
      if (arr[mid + 1] - arr[mid] != diff)
          return (arr[mid] + diff);

      // If the element just before mid is missing
      if (mid > 0 && arr[mid] - arr[mid - 1] != diff)
          return (arr[mid - 1] + diff);

      // If the elements till mid follow the arithmetic
      // progression, recur for the right half
      if (arr[mid] == arr[0] + mid * diff)
          return findMissingUtil(arr, mid + 1, high, diff);

      // Else recur for the left half
      return findMissingUtil(arr, low, mid - 1, diff);
  }

  // Function to find the missing element in the
  // arithmetic progression
  static int findMissing(int[] arr) {
      int n = arr.length;

      // Calculate the common difference using the first
      // and last elements
      int diff = (arr[n - 1] - arr[0]) / n;
      return findMissingUtil(arr, 0, n - 1, diff);
  }
  
  public static void main(String[] args) {
      int[] arr = { 2, 4, 8, 10, 12, 14 };
      System.out.println(findMissing(arr));
  }
}