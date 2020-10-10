const array1 = [1, 3, 4, 8];
const array2 = [1, 3, 12, 15];

const finalArr = [];

function mergeArray(arr1, arr2) {
	const arr1LastIndex = arr1.length - 1;
	const arr2LastIndex = arr2.length - 1;
	if (arr1[arr1LastIndex] > arr2[arr2LastIndex]) {
		for (i = 0, j = 0; i < arr1.length; ) {
			if (arr1[i] > arr2[j]) {
				finalArr.push(arr2[j]);
				j++;
			} else {
				finalArr.push(arr1[i]);
				i++;
			}
		}
	} else {
		for (i = 0, j = 0; j < arr2.length; ) {
			if (arr1[i] <= arr2[j]) {
				finalArr.push(arr1[i]);
				i++;
			} else {
				finalArr.push(arr2[j]);
				j++;
			}
		}
	}
	console.log(finalArr);
	return finalArr;
}

mergeArray(array1, array2);
