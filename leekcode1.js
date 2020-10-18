const array1 = [-11, 2, 9];
const array2 = [4, 12];

// const finalArr = [];

function mergeArray(l1, l2) {
	const finalArr = [];
	const l1LastIndex = l1.length - 1;
	const l2LastIndex = l2.length - 1;
	if (l1[l1LastIndex] > l2[l2LastIndex]) {
		for (i = 0, j = 0; i < l1.length; ) {
			if (l1[i] > l2[j]) {
				finalArr.push(l2[j]);
				j++;
			} else {
				finalArr.push(l1[i]);
				i++;
			}
		}
	} else {
		for (i = 0, j = 0; j < l2.length; ) {
			if (l1[i] <= l2[j]) {
				finalArr.push(l1[i]);
				i++;
			} else {
				finalArr.push(l2[j]);
				j++;
			}
		}
	}
	console.log(finalArr);
	return finalArr;
}

mergeArray(array1, array2);
