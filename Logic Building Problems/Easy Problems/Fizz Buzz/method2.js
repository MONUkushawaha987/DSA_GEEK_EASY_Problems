// JavaScript program for Fizz Buzz Problem 
// by checking every integer individually 
// with string concatenation
function fizzBuzz(n) {
    const res = []; 

    for (let i = 1; i <= n; i++) {
    
        // Initialize an empty string for the current result
        let s = ""; 

        // Divides by 3, add Fizz
        if (i % 3 === 0) s += "Fizz";
        
        // Divides by 5, add Buzz
        if (i % 5 === 0) s += "Buzz";
        
        // Not divisible by 3 or 5, add the number
        if (s === "") s += i;
        
        // Append the current result to the array
        res.push(s); 
    }

    return res;
}

// Driver code
const n = 20;
const res = fizzBuzz(n); 
console.log(res.join(" "));