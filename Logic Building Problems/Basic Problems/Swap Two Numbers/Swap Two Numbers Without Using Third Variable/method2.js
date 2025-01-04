// JavaScript Code to swap two numbers using bitwise XOR

let a = 2, b = 3;
console.log("a = " + a + " b = " + b);   

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a = " + a + " b = " + b);