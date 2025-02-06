// Javascript program to find GCD of two numbers
// Function to return gcd of a and b
function gcd(a,b)
{
    // Find Minimum of a and b
    let result = Math.min(a, b);
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    
    // Return gcd of a and b
    return result;
}

// Driver program to test above function
let a = 98;
let b = 56;
console.log("GCD of ",a," and ",b," is ",gcd(a, b));