// C++ program to find the square root of given integer using binary search

#include <iostream>
using namespace std;

int floorSqrt(int n) {
  
    // Initial search space
    int lo = 1, hi = n;
    int res = 1;
    
    while(lo <= hi) {
        int mid = lo + (hi - lo)/2;
        
        // If square of mid is less than or equal to n 
        // update the result and search in upper half
        if(mid*mid <= n) {
            res = mid;
            lo = mid + 1;
        }
        
        // If square of mid exceeds n, 
          // search in the lower half
        else {
            hi = mid - 1;
        }
    }
    
    return res;
}

int main() {
    int n = 11;
    cout << floorSqrt(n);
    return 0;
}