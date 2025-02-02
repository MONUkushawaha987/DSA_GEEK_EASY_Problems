function is_composite(n) {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return true;
		}
	}
	return false;
}

function sum_product_k_smallest_largest_composite(arr, k) {
	let composite_nums = [];
	for (let num of arr) {
		if (is_composite(num)) {
			composite_nums.push(num);
		}
	}

	let k_smallest_composites = composite_nums.slice(0).sort((a, b) => a - b).slice(0, k);
	let k_largest_composites = composite_nums.slice(0).sort((a, b) => b - a).slice(0, k);

	let sum_k_smallest = k_smallest_composites.reduce((a, b) => a + b, 0);
	let sum_k_largest = k_largest_composites.reduce((a, b) => a + b, 0);

	let product_k_smallest = k_smallest_composites.reduce((a, b) => a * b, 1);
	let product_k_largest = k_largest_composites.reduce((a, b) => a * b, 1);

	return [sum_k_smallest, sum_k_largest, product_k_smallest, product_k_largest];
}

let arr = [6, 4, 2, 12, 13, 5, 19, 10];
let k = 3;

let result = sum_product_k_smallest_largest_composite(arr, k);

console.log("Sum of k-minimum composite numbers:", result[0]);
console.log("Sum of k-maximum composite numbers:", result[1]);
console.log("Product of k-minimum composite numbers:", result[2]);
console.log("Product of k-maximum composite numbers:", result[3]);
