// C++ program to find GCD of two numbers
#include <bits/stdc++.h>
using namespace std;

// Iterative function to return gcd of a and b
int gcd(int a, int b)
{
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        }
        else {
            b = b % a;
        }
    }
    if (a == 0) {
        return b;
    }
    return a;
}

// Driver code
int main()
{
    int a = 98, b = 56;
    cout << "GCD of " << a << " and " << b << " is "
         << gcd(a, b);
    return 0;
}