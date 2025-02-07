// JAVA program to find gcd using inbuilt functions
import java.math.BigInteger;
import java.util.*;

public class Main1 {
    public static void main(String[] args)
    {
        int a = 98, b = 56;
        int gcd = gcd(a, b);
        System.out.println("The gcd of a and b is " + gcd);
    }

    public static int gcd(int a, int b)
    {
        BigInteger bigA = BigInteger.valueOf(Math.abs(a));
        BigInteger bigB = BigInteger.valueOf(Math.abs(b));
        BigInteger gcd = bigA.gcd(bigB);
        return gcd.intValue();
    }
}