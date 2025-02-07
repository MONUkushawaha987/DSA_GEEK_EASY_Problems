

// Javascript program to find GCD of two number

// Recursive function to return gcd of a and b

function gcd(a, b){
  
  // Everything divides 0
  if(b == 0){
    return a;
  }
  
  return gcd(b, a % b);
}

// Driver code
let a = 98;
let b = 56;

document.write(`GCD of ${a} and ${b} is ${gcd(a, b)}`);
