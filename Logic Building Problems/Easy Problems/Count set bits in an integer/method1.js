
// Javascript program to Count set
// bits in an integer

/* Function to get no of set bits in binary
representation of positive integer n */
function countSetBits(n)
{
	var count = 0;
	while (n)
	{
	count += n & 1;
	n >>= 1;
	}
	return count;
}

/* Program to test function countSetBits */
var i = 9;
document.write(countSetBits(i));
