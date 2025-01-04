// Efficient JAVA program to find sum 
// of first n natural numbers.
import java.io.*;

class logic2{

    static int findSum(int n)
    {
        return n * (n + 1) / 2;
    }

    // Driver code
    public static void main(String args[])
    {
        int n = 5;
        System.out.println(findSum(n));
    }
}