// Javascript implementation to find
// the number closest to n and
// divisible by m

function closestNumber(n, m) {

    // find the quotient
    let q = parseInt(n / m);
    
    // 1st possible closest number
    let n1 = m * q;
    
    // 2nd possible closest number
    let n2 = (n * m) > 0 ?
        (m * (q + 1)) : (m * (q - 1));
    
    // if true, then n1 is the
    // required closest number
    if (Math.abs(n - n1) < Math.abs(n - n2))
        return n1;
    
    // else n2 is the required
    // closest number
    return n2;
}

// Driver Code
let n = 13;
let m = 4;
console.log(closestNumber(n, m));