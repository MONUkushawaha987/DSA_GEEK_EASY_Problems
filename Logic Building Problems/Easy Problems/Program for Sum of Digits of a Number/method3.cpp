// C++ Code to find the sum of digits by taking the input number as string

#include <iostream>
using namespace std;

int sumOfDigits(string &s) {
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
      
        // Extract digit from character
        int digit = s[i] - '0';
      
        // Add digit to the sum
        sum = sum + digit;
    }
    return sum;
}

int main() {
    string s = "123456789123456789123422";

    cout << sumOfDigits(s);
    return 0;
}