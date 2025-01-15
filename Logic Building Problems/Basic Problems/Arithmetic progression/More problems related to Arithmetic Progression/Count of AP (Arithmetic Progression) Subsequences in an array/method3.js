// Javascript code to count the number of AP
// subsequences using Tabulation

// Function to count all AP subsequences using DP
function count(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    // Total number of AP subsequences
    let count = n + 1;

    // DP map to store subsequences ending at 
    // each element with specific common differences
    const dp = Array.from({ length: n }, () => new Map());

    // Traverse through each pair to populate dp table
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {

            // Calculate the common difference for
            // the current pair
            const diff = arr[i] - arr[j];

            // Get the count of subsequences with the 
            // same difference ending at j
            const countj = dp[j].get(diff) || 0;

            // Update the count of subsequences with 
            // this difference ending at i
            dp[i].set(diff, (dp[i].get(diff) || 0) + countj + 1);

            // Add the count of new subsequences to the total
            count += countj + 1;
        }
    }
    return count;
}

const arr = [1, 2, 3];
console.log(count(arr));