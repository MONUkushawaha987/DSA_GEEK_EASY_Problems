// n natural numbers that avoids overflow if
// result is going to be within limits.
#include<iostream>
using namespace std;
 
int findSum(int n)
{
   if (n % 2 == 0)
      
      // Here multiplying by 1LL help to 
      // perform calculations in long long, 
      // so that answer should not be overflowed
      return (n / 2) * 1LL * (n + 1); 
 
   // If n is odd, (n+1) must be even
   else
     
      // Here multiplying by 1LL help to 
      // perform calculations in long long, 
      // so that answer should not be overflowed
      return  ((n + 1) / 2) * 1LL * n; 
}
 
// Driver code
int main()
{
  int n = 5;
  cout << findSum(n);
  return 0;
}