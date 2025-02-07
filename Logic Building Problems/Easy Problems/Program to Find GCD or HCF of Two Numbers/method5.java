// Java program to find GCD of two numbers
import java.io.*;

class Test {

    // Iterative function to return gcd of a and b
    static int gcd(int a, int b)
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
    public static void main(String[] args)
    {
        int a = 98, b = 56;
        System.out.println("GCD of " + a + " and " + b
                           + " is " + gcd(a, b));
    }
}