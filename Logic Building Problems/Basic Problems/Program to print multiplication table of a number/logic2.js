// printTable() prints table of number and takes
//1 required value that is number of whose teble to be printed
//and an optional input i whose default value is 1

function printTable(n, i = 1) {
    if (i == 11)// base case
        return;
    console.log(n + " * " + i + " = " + n * i);
    i++;
    printTable(n,i);
}

// Driver Code
let n = 5;
printTable(n);