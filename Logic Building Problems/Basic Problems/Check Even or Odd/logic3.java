// Java program to
// check for even or odd
class logic3{
    public static boolean isEven(int n){
       if (n == (n >> 1) << 1) 
            return true;
        else 
            return false;
    }

    public static void main(String[] args) {
        int n = 4;
        if (isEven(n) == true)
            System.out.print("true");
        else
            System.out.print("false");
    }
}