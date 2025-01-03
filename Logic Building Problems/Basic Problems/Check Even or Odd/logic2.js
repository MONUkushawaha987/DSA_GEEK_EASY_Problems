// A simple JavaScript program to
// check for even or odd

function isEven(n) {
    
    // n & 1 is 1, then odd, else even
    if ((n & 1) === 0) {
           return true;
       } else {
           return false;
       }
   }
   
   // Driver code
   let n = 101;
   if (isEven(n)) {
       console.log("true");
   } else {
       console.log("false");
   }