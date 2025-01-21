// Java Code to find the sum of digits by
// taking the input number as string

class Main {
    static int sumOfDigits(String s) {
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
          
            // Extract digit from character
            int digit = s.charAt(i) - '0';
          
            // Add digit to the sum
            sum = sum + digit;
        }
        return sum;
    }

    public static void main(String[] args) {
        String s = "123456789123456789123422";
        System.out.println(sumOfDigits(s));
    }
}