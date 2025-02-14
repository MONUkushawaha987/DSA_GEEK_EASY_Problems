// Java program to find the missing number
// in a given arithmetic progression

import java.util.*;

class Main {
    static int findMissing(int[] arr) {
        int n = arr.length;

        // If exactly one element is missing, then we can find
        // difference of arithmetic progression using following
        // formula.
        int diff = (arr[n - 1] - arr[0]) / n;
        int lo = 0, hi = n - 1;

        while (lo <= hi) {
            int mid = (lo + hi) / 2;

            // if mid == (nth position of element in AP)-1
            // the missing element will exist in right half 
            if ((arr[mid] - arr[0]) / diff == mid)
                lo = mid + 1;

            // the missing element will exist in left half
            else
                hi = mid - 1;
        }

        // after breaking out of binary search loop the missing element
        // will exist between high and low
        return arr[hi] + diff;
    }

    public static void main(String[] args) {
        int[] arr = {2, 4, 8, 10, 12, 14};
        System.out.println(findMissing(arr));
    }
}