import java.util.*;
 
class logic2{
 
    // printTable() prints table of number and takes
    // 1 required value that is number of whose teble to be
    // printed and an optional input i whose default value is 1
    static void printTable(int n, Integer... val)  {
          int i = 1;
        if (val.length != 0)
            i = val[0];
        if (i == 11) // base case
            return;
        System.out.println(n + " * " + i + " = " + n * i);
        i++; 
        printTable(n, i);
    }
 
    public static void main(String[] args) {
        int n = 5;
        printTable(n);
    }
}