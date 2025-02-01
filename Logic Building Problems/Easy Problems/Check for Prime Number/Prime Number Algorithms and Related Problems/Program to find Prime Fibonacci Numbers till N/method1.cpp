// CPP program to print prime numbers present in Fibonacci series.
#include <bits/stdc++.h>
using namespace std;

// Function to check perfect square
bool isSquare(int n)
{
    int sr = sqrt(n);
    return (sr * sr == n);
}

// Prints all numbers less than or equal to n that
// are both Prime and Fibonacci.
void printPrimeAndFib(int n)
{
    // Using Sieve to generate all primes
    // less than or equal to n.
    bool prime[n + 1];    
    memset(prime, true, sizeof(prime));
    for (int p = 2; p * p <= n; p++) {

        // If prime[p] is not changed, then
        // it is a prime
        if (prime[p] == true) {

            // Update all multiples of p
            for (int i = p * 2; i <= n; i += p)
                prime[i] = false;
        }
    }

    // Now traverse through the range and print numbers
    // that are both prime and Fibonacci.
    for (int i=2; i<=n; i++)    
       if (prime[i] && (isSquare(5 * i * i + 4) > 0 || 
                        isSquare(5 * i * i - 4) > 0))
                cout << i << " ";
}

// Driver function
int main()
{
    int n = 30;
    printPrimeAndFib(n);
    return 0;
}