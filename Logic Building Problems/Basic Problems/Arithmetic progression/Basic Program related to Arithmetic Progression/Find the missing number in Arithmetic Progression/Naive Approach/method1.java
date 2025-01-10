// Java program to find the missing number
// in a given arithmetic progression
class GFG {
    static int findMissing(int[] arr) {
        int n = arr.length;
        int a = arr[0];
        int l = arr[n - 1];
        int s, sum = 0;

        // Calculate the sum of all elements including the missing element
        if ((a + l) % 2 == 0) {
            s = (a + l) / 2;
            s = s * (n + 1);
        } else {
            s = (n + 1) / 2;
            s = (a + l) * s;
        }

        // Calculate the sum of all elements in the array
        for (int num : arr) {
            sum += num;
        }

        // The missing number is the difference between the two sums
        return s - sum;
    }

    public static void main(String[] args) {
        int[] arr = {2, 4, 8, 10, 12, 14};
        System.out.println(findMissing(arr));
    }
}