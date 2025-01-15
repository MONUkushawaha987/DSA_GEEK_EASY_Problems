// Java program to find number of AP
// subsequences in the given array
import java.util.ArrayList;
import java.util.Arrays;

class Main {

    static int count(ArrayList<Integer> arr) {
        int n = arr.size();
        
        // initializing the minimum value and
        // maximum value of the array.
        int minarr = Integer.MAX_VALUE;
        int maxarr = Integer.MIN_VALUE;

        // Finding the minimum and maximum
        // value of the array.
        for (int i = 0; i < n; i++) {
            minarr = Math.min(minarr, arr.get(i));
            maxarr = Math.max(maxarr, arr.get(i));
        }

        // dp[i] is going to store count of 
        // APs ending with arr[i].
        // sum[j] is going to store sum of 
        // all dp[]'s with j as an AP element.
        int[] dp = new int[n];
        int[] sum = new int[1000001];

        // Initialize answer with n + 1 as 
        // single elements and empty array 
        // are also DP.
        int ans = n + 1;

        // Traversing with all common 
        // difference.
        for (int d = (minarr - maxarr); 
                d <= (maxarr - minarr); d++) {
            Arrays.fill(sum, 0);

            // Traversing all the elements 
            // of the array.
            for (int i = 0; i < n; i++) {
                
                // Initialize dp[i] = 1.
                dp[i] = 1;

                // Adding counts of APs with
                // given differences and arr[i] 
                // is last element.
                // We consider all APs where 
                // an array element is previous 
                // element of AP with a particular
                // difference
                if (arr.get(i) - d >= 1 && 
                             arr.get(i) - d <= 1000000)
                    dp[i] += sum[arr.get(i) - d];

                ans += dp[i] - 1;
                sum[arr.get(i)] += dp[i];
            }
        }

        return ans;
    }

    public static void main(String[] args) {
      
        ArrayList<Integer> arr 
          = new ArrayList<>(Arrays.asList(1, 2, 3));
        
        System.out.println(count(arr));
    }
}