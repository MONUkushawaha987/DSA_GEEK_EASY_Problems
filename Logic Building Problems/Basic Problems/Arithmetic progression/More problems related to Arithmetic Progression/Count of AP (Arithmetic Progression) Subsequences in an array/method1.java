// Java Code for count of AP
// Subsequences using Recursion
import java.util.*;

class Main {

    // Recursive function to count all
    // arithmetic subsequences
    static int numberOfAP(List<Integer> arr, int n, int idx, 
                           int pre, int count, int diff) {

        int ans = 0;

        // Base case: if we've processed all elements
        if (idx == n) {
            return 1;
        }

        // If we have picked one element but
        // no difference set yet
        if (pre != -1 && diff == Integer.MIN_VALUE) {

            // Pick the current element and
            // set the difference
            ans += numberOfAP(arr, n, idx + 1, idx, 
                              count + 1, arr.get(idx) - arr.get(pre));
        }

        // First element or continuation of
        // an AP with the same difference
        if (pre == -1 || diff == arr.get(idx) - arr.get(pre)) {

            // Pick the current element to extend the AP
            ans += numberOfAP(arr, n, idx + 1, 
                              idx, count + 1, diff);
        }

        // Skip the current element
        ans += numberOfAP(arr, n, idx + 1, pre, count, diff);

        return ans;
    }

    // Wrapper function to start the recursion
    static int count(List<Integer> arr) {
        int n = arr.size();
        return numberOfAP(arr, n, 0, -1, 0, Integer.MIN_VALUE);
    }

    public static void main(String[] args) {

        List<Integer> arr = Arrays.asList(1, 2, 3);
      
        System.out.println(count(arr));
    }
}