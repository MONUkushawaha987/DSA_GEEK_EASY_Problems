// Recursive Java Code to find sum of digits

import java.io.*;

class Main {
    static int sumOfDigits(int n) {
        
        // Base Case
        if (n == 0)
            return 0;

        // Recursive Case
        return (n % 10) + sumOfDigits(n / 10);
    }

    public static void main(String[] args) {
        System.out.println(sumOfDigits(12345));
    }
}