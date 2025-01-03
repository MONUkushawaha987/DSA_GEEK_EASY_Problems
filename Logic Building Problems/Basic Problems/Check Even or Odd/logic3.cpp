#include <bits/stdc++.h>
using namespace std;

bool isEven(int n) {
  if (n == (n >> 1) << 1) {
        return true;
    }
    else {
        return false;
    }
}

int main() {
  
  int n = 4;
  if (isEven(n) == true) 
        cout<<"true"; 
   else
        cout<<"false"; 

    return 0;
}