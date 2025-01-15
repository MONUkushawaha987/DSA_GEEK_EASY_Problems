// C++ code to count the number of AP subsequences using Tabulation
#include <bits/stdc++.h>
using namespace std;

// Function to count all AP subsequences using DP
int count(vector<int>& arr) {
    int n = arr.size();
    if (n == 0) return 0;

    // Total number of AP subsequences
    int count = n + 1;  

    // DP map to store subsequences ending at 
    // each element with specific common differences
    vector<unordered_map<int, int>> dp(n);

    // Traverse through each pair to populate dp table
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
          
            // Calculate the common difference for
              // the current pair
            int diff = arr[i] - arr[j];

            // Get the count of subsequences with the 
            // same difference ending at j
            int countj = dp[j].count(diff) ? dp[j][diff] : 0;

            // Update the count of subsequences with 
            // this difference ending at i
            dp[i][diff] += countj + 1;

            // Add the count of new subsequences 
              // to the total
            count += countj + 1;
        }
    }
    return count;
}

int main() {
  
    vector<int> arr = {1, 2, 3};
    cout << count(arr);
    return 0;
}