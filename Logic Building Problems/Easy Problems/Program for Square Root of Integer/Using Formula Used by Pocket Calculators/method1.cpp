// C++ program to find the square root of given integer using mathematical formula 

#include <iostream>
#include <cmath>
using namespace std;

int floorSqrt(int n) {
      
      // Calculating square root using mathematical formula    
    int res = exp(0.5 * log(n));
    
    // If square of  res + 1 is less than or equal to n
      // then, it will be our answer
    if ((res + 1) * (res + 1) <= n) {
        res++;
    }
    
    return res;
}

int main() {
    int n = 11;
    cout << floorSqrt(n);
    return 0;
}