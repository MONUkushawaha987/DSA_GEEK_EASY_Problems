// C++ program to find number of AP subsequences in the given array
#include <bits/stdc++.h>
using namespace std;

// Function to count the number of AP subsequences
int count(vector<int>& arr) {
    int n = arr.size();
   
    int minarr = INT_MAX;
    int maxarr = INT_MIN;

    // Finding the minimum and maximum value of the array.
    for (int i = 0; i < n; i++) {
        minarr = min(minarr, arr[i]);
        maxarr = max(maxarr, arr[i]);
    }

    // dp[i] is going to store the count of
    // APs ending with arr[i].
    // sum[j] is going to store the sum of 
    // all dp[]'s with j as an AP element.
    vector<int> dp(n, 0);
    vector<int> sum(1000001, 0);

    int ans = n + 1;

    // Traversing with all common differences.
    for (int d = (minarr - maxarr); d <= (maxarr - minarr); d++) {
        fill(sum.begin(), sum.end(), 0);

        // Traversing all the elements of the array.
        for (int i = 0; i < n; i++) {
          
            // Initialize dp[i] = 1.
            dp[i] = 1;

            // Adding counts of APs with given differences
            // and arr[i] is the last element.
            // We consider all APs where an array element 
            // is the previous element of the AP
            // with a particular difference.
            if (arr[i] - d >= 1 && arr[i] - d <= 1000000) {
                dp[i] += sum[arr[i] - d];
            }

            ans += dp[i] - 1;
            sum[arr[i]] += dp[i];
        }
    }

    return ans;
}

int main() {
  
    vector<int> arr = {1, 2, 3};
   
    cout << count(arr) << endl;
    return 0;
}