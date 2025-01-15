// Java code to count the number of AP
// subsequences using Tabulation
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

class Main {

    // Function to count all AP subsequences using DP
    static int count(ArrayList<Integer> arr) {
        int n = arr.size();
        if (n == 0) return 0;

        // Total number of AP subsequences
        int count = n + 1;

        // DP map to store subsequences ending at 
        // each element with specific common differences
        Map<Integer, Integer>[] dp = new HashMap[n];
        for (int i = 0; i < n; i++) {
            dp[i] = new HashMap<>();
        }

        // Traverse through each pair to populate dp table
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {

                // Calculate the common difference
                  // for the current pair
                int diff = arr.get(i) - arr.get(j);

                // Get the count of subsequences with the 
                // same difference ending at j
                int countj = dp[j].getOrDefault(diff, 0);

                // Update the count of subsequences with 
                // this difference ending at i
                dp[i].put(diff, dp[i].getOrDefault(diff, 0) + countj + 1);

                // Add the count of new subsequences to the total
                count += countj + 1;
            }
        }
        return count;
    }

    public static void main(String[] args) {

        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(1);
        arr.add(2);
        arr.add(3);
        System.out.println(count(arr));
    }
}