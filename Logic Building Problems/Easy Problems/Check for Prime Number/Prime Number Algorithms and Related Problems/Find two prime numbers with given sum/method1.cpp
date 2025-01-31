// C++ code to find two primes whose sum equals given even number
#include <bits/stdc++.h>
using namespace std;

// Function to generate primes up to n 
// using Sieve of Eratosthenes
vector<bool> sieve(int n) {
  
    // Initialize all as prime
    vector<bool> isPrime(n + 1, true); 
  
    // 0 and 1 are not primes
    isPrime[0] = isPrime[1] = false;  

    // Mark non-primes using multiples of each prime
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false; 
            }
        }
    }
    return isPrime; 
}

// Function to find two primes whose sum equals n
vector<int> primeDivision(int n) {
  
    // Get all primes up to n
    vector<bool> isPrime = sieve(n); 

    // Iterate to find the smallest pair
    for (int i = 2; i <= n / 2; i++) {
        if (isPrime[i] && isPrime[n - i]) {
            return {i, n - i}; 
        }
    }
  
    // Return empty if no pair found (won't occur)
    return {}; 
}

int main() {
    
    int n = 74; 
    vector<int> result = primeDivision(n);

    cout << result[0] << " " << result[1];
 
    return 0;
}