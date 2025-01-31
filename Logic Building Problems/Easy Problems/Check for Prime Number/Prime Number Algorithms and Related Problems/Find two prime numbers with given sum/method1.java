// Java code to find two primes whose sum 
// equals given even number
import java.util.*;

class Main {

    // Function to generate primes up to n 
    // using Sieve of Eratosthenes
    static boolean[] sieve(int n) {
        
        // Initialize all as prime
        boolean[] isPrime = new boolean[n + 1]; 
        Arrays.fill(isPrime, true); 
        
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
    static List<Integer> primeDivision(int n) {
        
        // Get all primes up to n
        boolean[] isPrime = sieve(n); 

        // Iterate to find the smallest pair
        for (int i = 2; i <= n / 2; i++) {
            if (isPrime[i] && isPrime[n - i]) {
                return Arrays.asList(i, n - i); 
            }
        }
        
        // Return empty list if no pair found (won't occur)
        return new ArrayList<>(); 
    }

    public static void main(String[] args) {
      
        int n = 74; 
        List<Integer> result = primeDivision(n);

        System.out.print(result.get(0) + " " + result.get(1));
    }
}