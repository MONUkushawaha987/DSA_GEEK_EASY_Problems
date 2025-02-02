// Java program to print n consecutive composite 
// numbers

class Main {

    // function to find factorial of given 
    // number 
        static long factorial(int n) {
            long res = 1;
            for (int i = 2; i <= n; i++) {
                res *= i;
            }
            return res;
        }
    
    // Prints n consecutive numbers. 
        static void printNComposite(int n) {
            long fact = factorial(n + 1);
            for (int i = 2; i <= n + 1; ++i) {
                System.out.print(fact + i + " ");
            }
        }
    
    // Driver program to test above function 
        public static void main(String[] args) {
            int n = 4;
            printNComposite(n);
    
        }
    }
    