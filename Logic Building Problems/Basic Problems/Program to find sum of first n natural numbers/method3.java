// n natural numbers that avoids overflow if
// result is going to be within limits.
import java.io.*;

class method3{

    // Returns sum of first n natural
    // numbers
    static int findSum(int n)
    {
        if (n % 2 == 0)
            return (n / 2) * (n + 1);

        // If n is odd, (n+1) must be even
        else
            return ((n + 1) / 2) * n;
    }

    // Driver code
    public static void main(String args[])
    {
        int n = 5;
        System.out.println(findSum(n));
    }
}