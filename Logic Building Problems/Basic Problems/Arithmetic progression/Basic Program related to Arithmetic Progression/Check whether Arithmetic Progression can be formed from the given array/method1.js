// Javascript program to check if a given array
// can form arithmetic progression

// Returns true if a permutation of arr[0..n-1]
// can form arithmetic progression
function checkIsAP(arr, n)
{
if (n == 1)
	return true;

// Sort array
arr.sort((a, b) => a - b);

// After sorting, difference between
// consecutive elements must be same.
let d = arr[1] - arr[0];
for (let i=2; i<n; i++)
	if (arr[i] - arr[i-1] != d)
	return false;

return true;
}

// Driven Program

let arr = [ 20, 15, 5, 0, 10 ];
let n = arr.length;

(checkIsAP(arr, n))? (document.write("Yes" + "<br>")) :
					(document.write("No" + "<br>"));


