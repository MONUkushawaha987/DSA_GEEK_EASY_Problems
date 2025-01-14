// JavaScript code
let a = 2;
let d = 1;
let n = 5;

let nthTerm = a;
for (let i = 1; i < n; i++) {
    nthTerm += d;
}
console.log(`The ${n}th term of the series is: ${nthTerm}`);