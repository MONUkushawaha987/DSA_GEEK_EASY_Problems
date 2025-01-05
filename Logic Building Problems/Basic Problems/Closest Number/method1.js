// JavaScript implementation to find the number closest to n
// and divisible by m
function closestNumber(n, m) {

    // find the quotient
    let closest = 0;
    let minDifference = Infinity;

    // Check numbers around n
    for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
        if (i % m === 0) {
            let difference = Math.abs(n - i);

            if (difference < minDifference || 
               (difference === minDifference && Math.abs(i) > Math.abs(closest))) {
                closest = i;
                minDifference = difference;
            }
        }
    }
    return closest;
}

//driver code
let n = 13, m = 4;
console.log(closestNumber(n, m));