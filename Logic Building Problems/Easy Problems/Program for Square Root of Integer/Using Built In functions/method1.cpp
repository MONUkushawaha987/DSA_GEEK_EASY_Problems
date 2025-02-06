// C++ program to find the square root of given integer using built in square root function

#include <iostream>
#include <cmath>
using namespace std;

int floorSqrt(int n) {
      
      // Square root using sqrt function, it returns
      // the double value, which is casted to integer
      int res = sqrt(n);
      return res;
}

int main() {
    int n = 11;
    cout << floorSqrt(n);
    return 0;
}