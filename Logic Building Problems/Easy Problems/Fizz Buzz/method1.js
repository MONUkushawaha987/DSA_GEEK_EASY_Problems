// JavaScript program for Fizz Buzz Problem 
// by checking every integer individually

function fizzBuzz(n) {
    let res = [];

    for (let i = 1; i <= n; ++i) {
    
        // Check if i is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
        
            // Add "FizzBuzz" to the result array
            res.push("FizzBuzz");
        } 
        
        // Check if i is divisible by 3
        else if (i % 3 === 0) {
        
            // Add "Fizz" to the result array
            res.push("Fizz");
        } 
        
        // Check if i is divisible by 5
        else if (i % 5 === 0) {
        
            // Add "Buzz" to the result array
            res.push("Buzz");
        } 
        else {
        
            // Add the current number as a string to the
            // result array
            res.push(i.toString());
        }
    }
    return res;
}

// Driver code
let n = 20;
let res = fizzBuzz(n);
console.log(res.join(' '));