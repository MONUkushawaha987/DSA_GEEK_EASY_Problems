// Java code for finding the
// maximum length of AP
import java.io.*;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Map;
import java.lang.*;

class Main{
static int maxlenAP(int a[], 
					int n, int d)
{
	// key=starting element of an AP,
	// value=length of AP
	HashMap<Integer, Integer> m = 
					new HashMap<Integer, Integer>();

	// since the length of longest 
	// AP is at least one i.e. 
	// the number itself.
	int maxt = 1;

	// if element a[i]'s starting
	// element(i.e., a[i]-i*d)
	// is not in map then its value
	// is 1 else there already
	// exists a starting element of
	// an AP of which a[i] can be
	// a part.
	for (int i = 0; i < n; i++) 
	{
		if(m.containsKey(a[i] - i * d))
		{
			int freq = m.get(a[i] - i * d);
			freq++;
			m.put(a[i] - i * d, freq);
		}
		else
		{
			m.put(a[i] - i * d, 1);
		}
	}

	// auto operator stores the key,
	// value pair type from the map.
	for(Entry<Integer, Integer> val: m.entrySet())
	{
		if (maxt < val.getValue())
			maxt = val.getValue();
	}
	return maxt;
}

// Driver code
public static void main(String[] args)
{
	int n = 10, d = 3;
	int a[] = new int[]{ 1, 4, 2, 5, 20, 11, 
						56, 100, 20, 23 };

	System.out.print(maxlenAP(a, n, d) + "\n");
}
}

