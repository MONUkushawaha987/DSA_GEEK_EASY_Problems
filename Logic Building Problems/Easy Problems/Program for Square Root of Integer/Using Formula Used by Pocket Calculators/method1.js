// JavaScript program to find the square root of given integer
// using mathematical formula 

function floorSqrt(n) {
  
    // Calculating square root using mathematical formula    
    let res = Math.floor(Math.exp(0.5 * Math.log(n)));
    
    // If square of res + 1 is less than or equal to n
    // then, it will be our answer
    if ((res + 1) * (res + 1) <= n) {
        res++;
    }
    
    return res;
}

let n = 11;
console.log(floorSqrt(n));