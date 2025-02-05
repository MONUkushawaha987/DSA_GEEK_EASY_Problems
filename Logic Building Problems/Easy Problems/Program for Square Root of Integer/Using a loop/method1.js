// JavaScript program to find the square root of 
// given integer using a loop

function floorSqrt(n) {
    
    // Start iteration from 1 until the 
    // square of a number exceeds n
    let res = 1;
    while (res * res <= n) {
        res++;
    }
    
    // return the largest integer whose 
    // square is less than or equal to n
    return res - 1;
}

// Driver Code
let n = 11;
console.log(floorSqrt(n));