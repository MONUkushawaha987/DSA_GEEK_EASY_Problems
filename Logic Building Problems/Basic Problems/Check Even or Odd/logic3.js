// A simple JavaScript program to
// check for even or odd

function isEven(n) {
   
    if (n == (n >> 1) << 1) 
       return true;
    else 
       return false;
}

// Driver code
let n = 4;
if (isEven(n)) {
    console.log("true");
} else {
    console.log("false");
}