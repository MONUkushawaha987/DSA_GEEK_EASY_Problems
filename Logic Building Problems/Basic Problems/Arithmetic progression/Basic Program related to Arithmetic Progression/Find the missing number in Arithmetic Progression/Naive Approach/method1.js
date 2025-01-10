// JavaScript program to find the missing number
// in a given arithmetic progression
function findMissing(arr) {
    let a = arr[0];
    let l = arr[arr.length - 1];
    let n = arr.length;
    let sum = 0;

    // Calculate the expected sum of the progression
    let totalSum = (n + 1) * (a + l) / 2;

    // Calculate the actual sum of the array
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    // The missing number is the difference
    return totalSum - sum;
}

// Driver Code
let arr = [ 2, 4, 8, 10, 12, 14 ];
console.log(findMissing(arr));