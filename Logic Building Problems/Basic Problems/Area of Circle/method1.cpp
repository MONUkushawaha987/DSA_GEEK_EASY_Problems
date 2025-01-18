#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

float findArea(float r) {
    return (M_PI * r * r);
}

int main() {
    float r = 5, area;
    area = findArea(r);
    cout << fixed << setprecision(5) << area;
    return 0;
}