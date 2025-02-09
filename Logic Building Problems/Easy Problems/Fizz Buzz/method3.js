// JavaScript program for Fizz Buzz Problem 
// by checking every integer individually 
// with hashing

function fizzBuzz(n) {
    const res = [];
    
    // Hash map to store all FizzBuzz mappings.
    const mp = {3: "Fizz", 5: "Buzz"};
    const divisors = [3, 5];

    for (let i = 1; i <= n; i++) {
        let s = ""; 

        for (let d of divisors) {
        
            // If the i is divisible by d, add the 
              // corresponding string mapped with d
            if (i % d === 0) {
                s += mp[d];
            }
        }

        // Not divisible by 3 or 5, add the number
        if (s === "") {
            s += i;
        }

        // Append the current answer str to the result array
        res.push(s);
    }

    return res;
}

//  Driver code
const n = 20; 
const res = fizzBuzz(n); 
console.log(res.join(" "));