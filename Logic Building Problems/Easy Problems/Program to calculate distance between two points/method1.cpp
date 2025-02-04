#include <iostream>
#include <cmath>

// Function to calculate distance
double distance(double x1, double y1, double x2, double y2) {
	return std::sqrt(std::pow((x2 - x1), 2) + std::pow((y2 - y1), 2));
}

// Driver Code
int main() {
	std::cout << distance(3, 4, 4, 3) << std::endl;
	return 0;
}
