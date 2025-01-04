// C++ Code to swap two numbers using third variable

#include <iostream>
using namespace std;

int main() {
    int a = 2, b = 3;
    cout << "a = " << a << " b = " << b << endl;   
  
    // Swap a and b using temp variable
    int temp = a;
    a = b;
    b = temp;
  
    cout << "a = " << a << " b = " << b << endl;
    return 0;
}