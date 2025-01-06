// C++ program for the above approach
#include<bits/stdc++.h>
using namespace std;

int oppositeFaceOfDice(int n) {
  
    // Stores number on opposite face
    // of dice
    int ans = 7 - n;
    cout << ans;
}

int main() {
  
    int n = 2;
    oppositeFaceOfDice(n);

    return 0;
}