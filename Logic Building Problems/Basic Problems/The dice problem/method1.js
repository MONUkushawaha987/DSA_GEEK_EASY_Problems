// JavaScript program to find opposite face of dice
function oppositeFaceOfDice(n) {
    if (n === 1) {
        console.log(6);
    } else if (n === 2) {
        console.log(5);
    } else if (n === 3) {
        console.log(4);
    } else if (n === 4) {
        console.log(3);
    } else if (n === 5) {
        console.log(2);
    } else {
        console.log(1);
    }
}

//driver code
let n = 2;
oppositeFaceOfDice(n);