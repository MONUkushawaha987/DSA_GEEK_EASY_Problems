// Java program for Fizz Buzz Problem 
// by checking every integer individually 
// with string concatenation

import java.util.ArrayList;
class Main {
  
    static ArrayList<String> fizzBuzz(int n) {
        ArrayList<String> res = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
          
           // Initialize an empty string for the current result
            String s = ""; 

            // Divides by 3, add Fizz
            if (i % 3 == 0) s += "Fizz";
          
            // Divides by 5, add Buzz
            if (i % 5 == 0) s += "Buzz";
          
            // Not divisible by 3 or 5, add the number
            if (s.isEmpty()) s += i;
            
            // Append the current result to the list
            res.add(s);
        }

        return res;
    }

    public static void main(String[] args) {
        int n = 20; 
        ArrayList<String> res = fizzBuzz(n);

        for (String s : res) {
            System.out.print(s + " ");
        }
    }
}