// Java program to count pairs whose sum cubes is n

class Main {
    // method to count the pairs satisfying
    // a ^ 3 + b ^ 3 = N
    static int countPairs(int n) {
        int count = 0;
     
        // Check for each number 1 to cbrt(n)
        for (int i = 1; i <= Math.cbrt(n); i++) {
            // Store cube of a number
            int cb = i*i*i;
     
            // Subtract the cube from given n
            int diff = n - cb;
     
            // Check if the difference is also
            // a perfect cube
            int cbrtDiff = (int) Math.cbrt(diff);
     
            // If yes, then increment count
            if (cbrtDiff*cbrtDiff*cbrtDiff == diff)
                count++;
        }

        return count;
    }
    
    public static void main(String args[])  {
  
             int n = 10;
            System.out.println(countPairs(n));
    }
}