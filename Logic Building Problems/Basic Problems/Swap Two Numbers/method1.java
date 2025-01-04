// Java Code to swap two numbers using third variable

class method1{
    public static void main(String[] args) {
        int a = 2, b = 3;
        System.out.println("a = " + a + " b = " + b);   
      
        // Swap a and b using temp variable
        int temp = a;
        a = b;
        b = temp;
      
        System.out.println("a = " + a + " b = " + b);
    }
}