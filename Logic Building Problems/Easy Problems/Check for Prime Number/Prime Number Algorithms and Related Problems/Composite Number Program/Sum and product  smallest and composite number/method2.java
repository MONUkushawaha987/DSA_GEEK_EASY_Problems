
import java.util.PriorityQueue;

public class SumProductKSmallestLargestComposite {

	public static boolean isComposite(int n) {
		if (n < 2) {
			return false;
		}
		for (int i = 2; i <= Math.sqrt(n); i++) {
			if (n % i == 0) {
				return true;
			}
		}
		return false;
	}

	public static int[] sumProductKSmallestLargestComposite(int[] arr, int k) {
		PriorityQueue<Integer> minHeap = new PriorityQueue<>();
		PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> (b - a));

		for (int num : arr) {
			if (isComposite(num)) {
				minHeap.add(num);
				maxHeap.add(num);
			}
		}

		int sumKSmallest = 0;
		int sumKLargest = 0;
		int productKSmallest = 1;
		int productKLargest = 1;

		for (int i = 0; i < k; i++) {
			sumKSmallest += minHeap.peek();
			sumKLargest += maxHeap.peek();
			productKSmallest *= minHeap.poll();
			productKLargest *= maxHeap.poll();
		}

		return new int[] {sumKSmallest, sumKLargest, productKSmallest, productKLargest};
	}

	public static void main(String[] args) {
		int[] arr = {6, 4, 2, 12, 13, 5, 19, 10};
		int k = 3;
		int[] result = sumProductKSmallestLargestComposite(arr, k);

		System.out.println("Sum of k-minimum composite numbers: " + result[0]);
		System.out.println("Sum of k-maximum composite numbers: " + result[1]);
		System.out.println("Product of k-minimum composite numbers: " + result[2]);
		System.out.println("Product of k-maximum composite numbers: " + result[3]);
	}
}
