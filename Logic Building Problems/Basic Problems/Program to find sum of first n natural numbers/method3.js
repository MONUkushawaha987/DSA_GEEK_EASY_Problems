//efficient approach using  javascript to find the average
// of sum of first n natural numbers

// Return the average of sum
// of first n even numbers
function findSum(n)
{
    if (n % 2 == 0)
        return (n / 2) * (n + 1)

// If n is odd, (n+1) must be even
    else 
    return ((n + 1) / 2) * n
        
}
var n = 5;
console.log(findSum(n));