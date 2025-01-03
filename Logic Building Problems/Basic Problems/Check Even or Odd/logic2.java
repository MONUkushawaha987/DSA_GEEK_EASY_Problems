// Java program to
// check for even or odd
class logic2{
    public static boolean isEven(int n){
        if ((n & 1) == 0)
            return true;
        else
            return false;
    }

    public static void main(String[] args) {
        int n = 101;
        if (isEven(n) == true)
            System.out.print("true");
        else
            System.out.print("false");
    }
}