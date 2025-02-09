// C++ program for Fizz Buzz Problem 
// by checking every integer individually 
// with hashing

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<string> fizzBuzz(int n) {

    vector<string> res;

    // Hash map to store all fizzbuzz mappings.
    unordered_map<int, string> mp = 
                        {{3, "Fizz"}, {5, "Buzz"}};

    // List of divisors which we will iterate over.
    vector<int> divisors = {3, 5};

    for (int i = 1; i <= n; i++) {
        string s = "";

        for (int d : divisors) {

            // If the i is divisible by d, add the 
              // corresponding string mapped with d
            if (i % d == 0)
                s.append(mp[d]);
        }
       
        // Not divisible by 3 or 5, add the number
        if (s.empty())
            s.append(to_string(i));

        // Append the current answer str to the result vector
        res.push_back(s);
    }

    return res;
}

int main() {
    int n = 20;
    vector<string> res = fizzBuzz(n);

    for (const string &s : res)
        cout << s << " ";

    return 0;
}