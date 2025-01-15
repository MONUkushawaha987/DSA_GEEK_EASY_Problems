// Javascript Code for count of AP
// Subsequences using Memoization

// Recursive function to count all arithmetic 
// subsequences with memoization
function numberOfAP(arr, n, idx, pre, count, diff, memo) {

    // Base case: if we've processed all elements
    if (idx === n) {
        return 1;
    }

    // Create a unique key for the current state
    const key = idx + "_" + pre + "_" + count + "_" + diff;

    // Check if the result is already memoized
    if (memo.has(key)) {
        return memo.get(key);
    }

    let ans = 0;

    // If we have picked one element but 
    // no difference set yet
    if (pre !== -1 && diff === Number.MIN_SAFE_INTEGER) {

        // Pick the current element and set the difference
        ans += numberOfAP(arr, n, idx + 1, idx,
        count + 1, arr[idx] - arr[pre], memo);
    }

    // First element or continuation of an 
    // AP with the same difference
    if (pre === -1 || diff === arr[idx] - arr[pre]) {
    
        // Pick the current element to extend the AP
        ans += numberOfAP(arr, n, idx + 1, idx,
        count + 1, diff, memo);
    }

    // Skip the current element
    ans += numberOfAP(arr, n, idx + 1, pre,
                      count, diff, memo);

    // Store the result in the memo map
    memo.set(key, ans);

    return ans;
}

// Wrapper function to start the recursion
function count(arr) {
    const memo = new Map();
    return numberOfAP(arr, arr.length, 0, -1, 0, 
            Number.MIN_SAFE_INTEGER, memo);
}

const arr = [1, 2, 3];
console.log(count(arr));