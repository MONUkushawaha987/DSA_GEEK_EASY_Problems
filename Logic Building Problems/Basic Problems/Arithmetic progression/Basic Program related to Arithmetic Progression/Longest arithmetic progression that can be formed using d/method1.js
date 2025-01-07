
// JavaScript code for finding the
// maximum length of AP

function maxlenAP(a, n, d) {
	// key=starting element of an AP,
	// value=length of AP
	let m = new Map();

	// since the length of longest AP is at least
	// one i.e. the number itself.
	let maxt = 1;

	// if element a[i]'s starting element(i.e., a[i]-i*d)
	// is not in map then its value is 1 else there already
	// exists a starting element of an AP of which a[i]
	// can be a part.
	for (let i = 0; i < n; i++) {
		if (m.has(a[i] - i * d)) {
			m.set(a[i] - i * d, m.get(a[i] - i * d) + 1)
		} else {
			m.set(a[i] - i * d, 1)
		}
	}

	// auto operator stores the key,
	// value pair type from the map.
	for (let it of m)
		if (it[1] > maxt)

			// calculating the length of longest AP.
			maxt = it[1];

	return maxt;
}

// Driver code

let n = 10, d = 3;
let a = [1, 4, 2, 5, 20, 11, 56, 100, 20, 23];

document.write(maxlenAP(a, n, d) + "<br>");

