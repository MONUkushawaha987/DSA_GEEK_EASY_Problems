// JavaScript Code for count of AP
// Subsequences using Recursion

// Recursive function to count all 
// arithmetic subsequences
function numberOfAP(arr, n, idx, pre, count, diff) {
    let ans = 0;

    // Base case: if we've processed all elements
    if (idx === n) {
        return 1;
    }

    // If we have picked one element but 
    // no difference set yet
    if (pre !== -1 && diff === Number.MIN_SAFE_INTEGER) {
        
        // Pick the current element and 
        // set the difference
        ans += numberOfAP(arr, n, idx + 1, idx, 
                          count + 1, arr[idx] - arr[pre]);
    }

    // First element or continuation of 
    // an AP with the same difference
    if (pre === -1 || diff === arr[idx] - arr[pre]) {
        
        // Pick the current element to extend the AP
        ans += numberOfAP(arr, n, idx + 1, idx, count + 1, diff);
    }

    // Skip the current element
    ans += numberOfAP(arr, n, idx + 1, pre, count, diff);

    return ans;
}

// Wrapper function to start the recursion
function countAP(arr) {
    const n = arr.length;
    return numberOfAP(arr, n, 0, -1, 0, Number.MIN_SAFE_INTEGER);
}

const arr = [1, 2, 3];
console.log(countAP(arr));