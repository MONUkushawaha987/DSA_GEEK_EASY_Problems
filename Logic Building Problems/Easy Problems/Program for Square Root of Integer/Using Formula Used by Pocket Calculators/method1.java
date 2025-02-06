// Java program to find the square root of given integer
// using mathematical formula 

class Main {
  
    static int floorSqrt(int n) {
  
        // Calculating square root using mathematical formula    
        int res = (int)Math.exp(0.5 * Math.log(n));
        
        // If square of res + 1 is less than or equal to n
        // then, it will be our answer
        if ((res + 1) * (res + 1) <= n) {
            res++;
        }
        
        return res;
    }

    public static void main(String[] args) {
        int n = 11;
        System.out.println(floorSqrt(n));
    }
}