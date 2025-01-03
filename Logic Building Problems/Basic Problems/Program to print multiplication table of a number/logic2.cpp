#include <iostream>
using namespace std;

// printTable() prints table of number and takes
// 1 required value that is number of whose teble 
// to be printed and an optional input i whose d
// efault value is 1
void printTable(int n, int i = 1) {
    if (i == 11)
        return;
    cout << n << " * " << i << " = " << n * i << endl;
    i++;
    printTable(n,i);
}

int main() {
    int n = 5;
    printTable(n);
}