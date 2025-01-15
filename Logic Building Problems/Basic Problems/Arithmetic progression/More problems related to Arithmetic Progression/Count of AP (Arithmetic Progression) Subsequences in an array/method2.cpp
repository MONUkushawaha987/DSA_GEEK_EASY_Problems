// C++ Code for count of AP Subsequences using Memoization
#include <bits/stdc++.h>
using namespace std;

// Recursive function to count all 
// arithmetic subsequences with memoization
int numberOfAP(vector<int>& arr, int n, int idx, 
               int pre, int count, int diff, 
               unordered_map<string, int>& memo) {

    // Base case: if we've processed all elements
    if (idx == n) {
        return 1;
    }

    // Create a unique key for the current state
    string key = to_string(idx) + "_" + to_string(pre) + "_" + 
                 to_string(count) + "_" + to_string(diff);

    // Check if the result is already memoized
    if (memo.find(key) != memo.end()) {
        return memo[key];
    }

    int ans = 0;

    // If we have picked one element but 
    // no difference set yet
    if (pre != -1 && diff == INT_MIN) {
        
        // Pick the current element and 
        // set the difference
        ans += numberOfAP(arr, n, idx + 1, idx, 
                          count + 1, arr[idx] - arr[pre], memo);
    }

    // First element or continuation of 
    // an AP with the same difference
    if (pre == -1 || diff == arr[idx] - arr[pre]) {
        
        // Pick the current element to extend the AP
        ans += numberOfAP(arr, n, idx + 1, 
                          idx, count + 1, diff, memo);
    }

    // Skip the current element
    ans += numberOfAP(arr, n, idx + 1, pre, count, diff, memo);

    // Store the result in the memo map
    memo[key] = ans;

    return ans;
}

// Wrapper function to start the recursion
int count(vector<int>& arr) {
    int n = arr.size();
    unordered_map<string, int> memo; 
    return numberOfAP(arr, n, 0, -1, 0, INT_MIN, memo);
}

int main() {
  
    vector<int> arr = {1, 2, 3}; 

    cout << count(arr);
    return 0;
}