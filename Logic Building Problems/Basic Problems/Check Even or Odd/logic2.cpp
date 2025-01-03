// A simple C++ program to check for even or odd logic2
#include <iostream>
using namespace std;

bool isEven(int n) {
        if ((n & 1) == 0)
            return true;
        else
            return false;
}

int main() {
    int n = 101;
     if (isEven(n) == true) 
        cout<<"true"; 
       else
        cout<<"false"; 

    return 0;
}