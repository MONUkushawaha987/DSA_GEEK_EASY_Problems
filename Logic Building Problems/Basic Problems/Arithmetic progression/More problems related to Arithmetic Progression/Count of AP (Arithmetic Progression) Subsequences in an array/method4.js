// JavaScript program to find the number of AP
// subsequences in the given array

function count(arr) {

    // Initialize the minimum and maximum 
    // values of the array.
    let minarr = +2147483647;
    let maxarr = -2147483648;

    // Finding the minimum and maximum values of the array.
    for (let i = 0; i < arr.length; i++) {
        minarr = Math.min(minarr, arr[i]);
        maxarr = Math.max(maxarr, arr[i]);
    }

    // dp[i] stores the count of APs ending with arr[i].
    // sum[j] stores the sum of all dp[]'s with j as an AP element.
    let dp = new Array(arr.length);
    let sum = new Array(1000001);

    // Initialize answer with arr.length + 1, as single 
    // elements and an empty array are also APs.
    let ans = arr.length + 1;

    // Traversing all possible common differences.
    for (let d = minarr - maxarr; d <= maxarr - minarr; d++) {
        sum.fill(0);

        // Traverse each element of the array.
        for (let i = 0; i < arr.length; i++) {
        
            // Initialize dp[i] = 1.
            dp[i] = 1;

            // Add counts of APs with the given difference 
            // and arr[i] as the last element.
            // We consider all APs where a previous array 
            // element is part of an AP with the same difference.
            if (arr[i] - d >= 1 && arr[i] - d <= 1000000) {
                dp[i] += sum[arr[i] - d];
            }

            ans += dp[i] - 1;
            sum[arr[i]] += dp[i];
        }
    }

    return ans;
}

let arr = [1, 2, 3];
console.log(count(arr));