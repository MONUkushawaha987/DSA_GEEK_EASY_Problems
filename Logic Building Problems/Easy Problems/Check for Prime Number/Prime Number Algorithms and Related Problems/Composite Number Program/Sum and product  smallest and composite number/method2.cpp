#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <cmath>

using namespace std;

bool isComposite(int n) {
	if (n < 2) {
		return false;
	}
	for (int i = 2; i <= sqrt(n); i++) {
		if (n % i == 0) {
			return true;
		}
	}
	return false;
}

vector<int> sumProductKSmallestLargestComposite(vector<int> arr, int k) {
	priority_queue<int, vector<int>, greater<int>> minHeap;
	priority_queue<int, vector<int>, less<int>> maxHeap;

	for (int num : arr) {
		if (isComposite(num)) {
			minHeap.push(num);
			maxHeap.push(num);
		}
	}

	int sumKSmallest = 0;
	int sumKLargest = 0;
	int productKSmallest = 1;
	int productKLargest = 1;

	for (int i = 0; i < k; i++) {
		sumKSmallest += minHeap.top();
		sumKLargest += maxHeap.top();
		productKSmallest *= minHeap.top();
		productKLargest *= maxHeap.top();
		minHeap.pop();
		maxHeap.pop();
	}

	return {sumKSmallest, sumKLargest, productKSmallest, productKLargest};
}

int main() {
	vector<int> arr = {6, 4, 2, 12, 13, 5, 19, 10};
	int k = 3;
	vector<int> result = sumProductKSmallestLargestComposite(arr, k);

	cout << "Sum of k-minimum composite numbers: " << result[0] << endl;
	cout << "Sum of k-maximum composite numbers: " << result[1] << endl;
	cout << "Product of k-minimum composite numbers: " << result[2] << endl;
	cout << "Product of k-maximum composite numbers: " << result[3] << endl;

	return 0;
}
