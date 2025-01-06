// C++ program for the above approach
#include<bits/stdc++.h>
using namespace std;

int oppositeFaceOfDice(int n) {
  
  if(n==1){
    cout<<6;
  }else if(n==2){
    cout<<5;
  }else if(n==3){
    cout<<4;
  }else if(n==4){
    cout<<3;
  }else if(n==5){
    cout<<2;
  }else{
    cout<<1;
  }
}

int main() {
  
    int n = 2;
    oppositeFaceOfDice(n);

    return 0;
}