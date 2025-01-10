// JavaScript program to find the missing number
// in a given arithmetic progression

function findMissing(arr) {
    let n = arr.length;

    // If exactly one element is missing, then we can find
    // difference of arithmetic progression using following
    // formula.
    let diff = (arr[n - 1] - arr[0]) / n;
    let lo = 0, hi = n - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        // if mid == (nth position of element in AP)-1
        // the missing element will exist in right half 
        if (Math.floor((arr[mid] - arr[0]) / diff) === mid)
            lo = mid + 1;

        // the missing element will exist in left half
        else
            hi = mid - 1;
    }

    // after breaking out of binary search loop the missing element
    // will exist between high and low
    return arr[hi] + diff;
}

// Driver code
let arr = [2, 4, 8, 10, 12, 14];
console.log(findMissing(arr));