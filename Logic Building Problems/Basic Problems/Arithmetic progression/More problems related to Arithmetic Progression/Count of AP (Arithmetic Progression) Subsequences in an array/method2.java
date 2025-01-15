// Java Code for count of AP
// Subsequences using Memoization
import java.util.ArrayList;
import java.util.HashMap;

class Main {

    // Recursive function to count all 
    // arithmetic subsequences with memoization
    static int numberOfAP(ArrayList<Integer> arr, int n, int idx, 
                                  int pre, int count, int diff, 
                                  HashMap<String, Integer> memo) {

        // Base case: if we've processed all elements
        if (idx == n) {
            return 1;
        }

        // Create a unique key for the current state
        String key = idx + "_" + pre + "_" + count + "_" + diff;

        // Check if the result is already memoized
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        int ans = 0;

        // If we have picked one element but 
        // no difference set yet
        if (pre != -1 && diff == Integer.MIN_VALUE) {
            
            // Pick the current element and 
            // set the difference
            ans += numberOfAP(arr, n, idx + 1, idx, 
                              count + 1, arr.get(idx) - arr.get(pre), memo);
        }

        // First element or continuation of 
        // an AP with the same difference
        if (pre == -1 || diff == arr.get(idx) - arr.get(pre)) {
            
            // Pick the current element to extend the AP
            ans += numberOfAP(arr, n, idx + 1, idx, count + 1, diff, memo);
        }

        // Skip the current element
        ans += numberOfAP(arr, n, idx + 1, pre, count, diff, memo);

        // Store the result in the memo map
        memo.put(key, ans);

        return ans;
    }

    // Wrapper function to start the recursion
    static int count(ArrayList<Integer> arr) {
        int n = arr.size();
        HashMap<String, Integer> memo = new HashMap<>();
        return numberOfAP(arr, n, 0, -1, 0, Integer.MIN_VALUE, memo);
    }

    public static void main(String[] args) {

        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(1);
        arr.add(2);
        arr.add(3);

        System.out.println(count(arr));
    }
}