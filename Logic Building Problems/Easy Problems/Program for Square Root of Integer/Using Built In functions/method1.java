// Java program to find the square root of given
// integer using built in square root function

class Main {
  
    static int floorSqrt(int n) {
  
        // Square root using sqrt function, it returns
        // the double value, which is casted to integer
        int res = (int)Math.sqrt(n);
        return res;
    }

    public static void main(String[] args) {
        int n = 11;
        System.out.println(floorSqrt(n));
    }
}