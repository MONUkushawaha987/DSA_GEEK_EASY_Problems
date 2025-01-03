// A simple Javascript program to
// check for even or odd

function isEven(n) { 
    return (n % 2 == 0); 
}

// Driver code

    let n = 101;
    if (isEven(n)) {
        console.log("true");
    } else {
        console.log("false");
    }