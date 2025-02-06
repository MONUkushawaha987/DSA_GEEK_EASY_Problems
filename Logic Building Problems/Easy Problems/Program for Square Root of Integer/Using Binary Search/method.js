// JavaScript program to find the square root of given integer
// using binary search

function floorSqrt(n) {
  
    // Initial search space
    let lo = 1, hi = n;
    let res = 1;
    
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        
        // If square of mid is less than or equal to n 
        // update the result and search in upper half
        if (mid * mid <= n) {
            res = mid;
            lo = mid + 1;
        }
        
        // If square of mid exceeds n, 
        // search in the lower half
        else {
            hi = mid - 1;
        }
    }
    
    return res;
}

let n = 11;
console.log(floorSqrt(n));