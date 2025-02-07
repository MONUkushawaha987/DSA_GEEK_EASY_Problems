// Javascript program to find GCD of two number

// Recursive function to return gcd of a and b

function gcd(a, b){
  
    // Everything divides 0
        while (a > 0 && b > 0) {
          if (a > b) {
              a = a % b;
          }
          else {
              b = b % a;
          }
      }
      if (a == 0) {
          return b;
      }
      return a;
  }
  
  // Driver code
  let a = 98;
  let b = 56;
  
  console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);
  