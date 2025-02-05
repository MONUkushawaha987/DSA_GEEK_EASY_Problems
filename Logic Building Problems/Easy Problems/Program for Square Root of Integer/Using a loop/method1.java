// Java program to find the square root of 
// given integer using a loop

class Main {
    
    static int floorSqrt(int n) {
        
        // Start iteration from 1 until the 
        // square of a number exceeds n
        int res = 1;
        while (res * res <= n) {
            res++;
        }
        
        // return the largest integer whose 
        // square is less than or equal to n
        return res - 1;
    }

    public static void main(String[] args) {
        int n = 11;
        System.out.println(floorSqrt(n));
    }
}