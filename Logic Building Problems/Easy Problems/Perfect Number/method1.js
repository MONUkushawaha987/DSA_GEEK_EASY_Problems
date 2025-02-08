
// Javascript program to check if a given number is perfect 
// or not 

// Returns true if n is perfect 
function isPerfect(n) 
{ 
    // To store sum of divisors 
    sum = 1; 

    // Find all divisors and add them 
    for (let i=2; i*i<=n; i++) 
    { 
        if (n%i==0) 
        { 
            if(i*i!=n) 
                sum = sum + i + n/i; 
            else
                sum=sum+i; 
        } 
    } 
    // If sum of divisors is equal to 
    // n, then n is a perfect number 
    if (sum == n && n != 1) 
        return true; 

    return false; 
} 

// Driver program 
 
    document.write("Below are all perfect numbers till 10000" + "<br>"); 
    for (let n =2; n<10000; n++) 
        if (isPerfect(n)) 
            document.write(n + " is a perfect number" + "<br>"); 
