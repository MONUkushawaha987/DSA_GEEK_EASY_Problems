
// JavaScript program to print n consecutive composite 
// numbers

// function to find factorial of given 
// number 
	function factorial(n) {
		let res = 1;
		for (let i = 2; i <= n; i++) {
			res *= i;
		}
		return res;
	}

// Prints n consecutive numbers. 
	function printNComposite(n) {
		let fact = factorial(n + 1);
		for (let i = 2; i <= n + 1; ++i) {
			document.write(fact + i + " ");
		}
	}

// Driver code
	
		let n = 4;
		printNComposite(n);
