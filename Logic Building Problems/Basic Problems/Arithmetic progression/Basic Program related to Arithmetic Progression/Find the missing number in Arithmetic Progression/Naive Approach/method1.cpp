// C++ program to find the missing number in a given arithmetic progression
#include <iostream>
#include <vector>
using namespace std;
int findMissing(vector<int> &arr) {
    int n = arr.size(), s;
    int a = arr[0];
    int l = arr[n - 1];

    // Calculate the expected sum of the progression
    if ((a + l) % 2 == 0) {
        s = (a + l) / 2;
        s = s * (n + 1);
    } else {
        s = (n + 1) / 2;
        s = (a + l) * s;
    }
      
    // Calculate the sum of all elements in the array
      int sum = 0;
    for (int i = 0; i <= n - 1; i++) {
        sum = sum + arr[i];
    }
    return s - sum;
}

int main() {
    vector<int> arr = {2, 4, 8, 10, 12, 14};
    cout << findMissing(arr);
    return 0;
}