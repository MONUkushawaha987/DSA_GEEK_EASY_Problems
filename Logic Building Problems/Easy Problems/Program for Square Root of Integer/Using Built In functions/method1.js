// JavaScript program to find the square root of given
// integer using built in square root function

function floorSqrt(n) {
  
    // Square root using sqrt function, it returns
    // the double value, which is casted to integer
    let res = Math.floor(Math.sqrt(n));
    return res;
}

let n = 11;
console.log(floorSqrt(n));