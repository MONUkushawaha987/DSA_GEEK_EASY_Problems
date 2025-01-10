// A Javascript program to find the missing number in a
// given arithmetic progression

// A binary search based recursive function that returns
// the missing element in arithmetic progression
function findMissingUtil(arr, low, high, diff) {

    // There must be two elements to find the missing
    if (high <= low)
        return Number.MAX_VALUE;

    // Find index of middle element
    let mid = low + Math.floor((high - low) / 2);

    // The element just after the middle element is missing
    if (arr[mid + 1] - arr[mid] !== diff)
        return arr[mid] + diff;

    // The element just before mid is missing
    if (mid > 0 && arr[mid] - arr[mid - 1] !== diff)
        return arr[mid - 1] + diff;

    // If the elements till mid follow AP, then recur for
    // right half
    if (arr[mid] === arr[0] + mid * diff)
        return findMissingUtil(arr, mid + 1, high, diff);

    // Else recur for left half
    return findMissingUtil(arr, low, mid - 1, diff);
}

function findMissing(arr) {
    let n = arr.length;
    let diff = Math.floor((arr[n - 1] - arr[0]) / n);
    return findMissingUtil(arr, 0, n - 1, diff);
}

// Driver Code
let arr = [ 2, 4, 8, 10, 12, 14 ];
console.log(findMissing(arr));