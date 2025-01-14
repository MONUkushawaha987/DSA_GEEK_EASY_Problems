

// JavaScript Program to find nth term of  
// Arithmetic progression 

    function Nth_of_AP(a, d, N) 
    {  
        // using formula to find the  
        // Nth term t(n) = a(1) + (n-1)*d 
        return (a + (N - 1) * d); 
      
    } 
  
    // Driver code 

    // starting number 
    let a = 2;  
      
    // Common difference 
    let d = 1;  
      
    // N th term to be find 
    let N = 5;  
      
    // Display the output 
    document.write("The "+ N + "th term of the series is : " 
    + Nth_of_AP(a,d,N)); 
  


