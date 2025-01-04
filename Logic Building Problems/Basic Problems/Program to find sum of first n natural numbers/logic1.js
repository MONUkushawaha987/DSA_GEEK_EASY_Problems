// Javascript program to find sum of first n natural numbers.

function findSum(n)
{
   let sum = 0;
   for (let x = 1; x <= n; x++) 
     sum = sum + x;
   return sum;
}

let n = 5;
console.log(findSum(n));