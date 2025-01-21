// JavaScript Code to find the sum of digits by
// taking the input number as string

function sumOfDigits(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      
        // Extract digit from character
        let digit = s[i] - '0';
      
        // Add digit to the sum
        sum = sum + digit;
    }
    return sum;
}

// Driver Code
let s = "123456789123456789123422";
console.log(sumOfDigits(s));