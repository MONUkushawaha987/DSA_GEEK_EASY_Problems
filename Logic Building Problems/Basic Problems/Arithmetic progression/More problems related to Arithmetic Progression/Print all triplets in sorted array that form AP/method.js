
// JavaScript program to print all triplets in given
// array that form Arithmetic Progression

// Function to print all triplets in
// given sorted array that forms AP
function printAllAPTriplets( arr, n){
	const s = new Set()
	for (let i = 0; i < n - 1; i++)
	{
	for (let j = i + 1; j < n; j++)
	{
		// Use hash to find if there is
		// a previous element with difference
		// equal to arr[j] - arr[i]
		let diff = arr[j] - arr[i];
		if (s.has(arr[i] - diff))
			document.write(arr[i] - diff +" " + arr[i]
				+ " " + arr[j] + "<br>");
	}
	s.add(arr[i]);
	}
}

// Driver code

let arr = [ 2, 6, 9, 12, 17, 
				22, 31, 32, 35, 42 ];
let n = arr.length;
printAllAPTriplets(arr, n);


