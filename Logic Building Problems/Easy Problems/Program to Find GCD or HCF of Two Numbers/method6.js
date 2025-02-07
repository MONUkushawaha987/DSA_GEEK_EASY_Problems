function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Example usage
const a = 98;
const b = 56;
console.log("The gcd of a and b is " + gcd(a, b));

