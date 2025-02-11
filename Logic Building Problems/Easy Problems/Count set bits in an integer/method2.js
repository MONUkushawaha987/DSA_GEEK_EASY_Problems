

// Javascript implementation of recursive
// approach to find the number
// of set bits in binary representation
// of positive integer n

// recursive function to count set bits
function countSetBits(n)
{

	// base case
	if (n == 0)
		return 0;

	else

		// if last bit set add 1 else add 0
		return (n & 1) + countSetBits(n >> 1);
}

// driver code

	// get value from user
	let n = 9;

	// function calling
	document.write(countSetBits(n));

