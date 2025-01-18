// CPP program to find simple interest for given principal amount, time and rate of interest
#include<iostream>
using namespace std;

float simpleInterest(float p, float t, float r){
    /* Calculate simple interest  */
    float ans = (p * t * r) / 100;
    return ans;
}

int main() {

    float p = 1, r = 1, t = 1;
    cout <<simpleInterest(p,r,t);

    return 0;
}