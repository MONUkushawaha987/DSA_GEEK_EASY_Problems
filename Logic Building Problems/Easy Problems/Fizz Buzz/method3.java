// Java program for Fizz Buzz Problem  by checking every integer individually  with hashing

import java.util.ArrayList;
import java.util.HashMap;

class Main {

    static ArrayList<String> fizzBuzz(int n) {
        ArrayList<String> res = new ArrayList<>();

        // Hash map to store all FizzBuzz mappings.
        HashMap<Integer, String> mp = new HashMap<>();
        mp.put(3, "Fizz");
        mp.put(5, "Buzz");

        // List of divisors which we will iterate over.
        int[] divisors = { 3, 5 };

        for (int i = 1; i <= n; i++) {
            StringBuilder s = new StringBuilder();

            for (int d : divisors) {

                // If the i is divisible by d, add the 
                  // corresponding string mapped with d
                if (i % d == 0) {
                    s.append(mp.get(d));
                }
            }

            // Not divisible by 3 or 5, add the number
            if (s.length() == 0) {
                s.append(i);
            }

            // Append the current answer to the result
            // list
            res.add(s.toString());
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