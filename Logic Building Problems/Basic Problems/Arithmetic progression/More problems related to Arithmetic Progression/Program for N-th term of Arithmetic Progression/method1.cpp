#include <iostream>
using namespace std;

int main()
{
    int a = 2;
    int d = 1;
    int n = 5;
    
    int nthTerm = a;
    for (int i = 1; i < n; i++)
    {
        nthTerm += d;
    }
    cout << "The " << n << "th term of the series is: " 
         << nthTerm << endl;
    return 0;
}