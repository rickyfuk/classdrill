var testarr = [
	{ name: 'AAA', car: 'toyota' },
	{ name: 'BBB', car: 'honda' },
	{ name: 'CCC', car: 'toyota' },
	{ name: 'CCC', car: 'VW' },
	{ name: 'BBB', car: 'Mecd' },
	{ name: 'AAA', car: 'toyota' },
	{ name: 'DDD', car: 'Aruca' },
	{ name: 'AAA', car: 'lexus' },
	{ name: 'DDD', car: 'Mist' },
	{ name: 'CCC', car: 'KIA' },
	{ name: 'BBB', car: 'Audi' },
];

var temparr = testarr.map(function (a) {
	return a.name;
});
var findDup = function (arr) {
	let dups = [];
	let compare = [];
	for (i = 0; i < arr.length; i++) {
		if (compare.includes(arr[i])) {
			dups.push(arr[i]);
		} else {
			compare.push(arr[i]);
			console.log(compare);
		}
	}
	return compare;
};

var lastIndex = function (arr1, arr2) {
	let lastIndexArr = [];
	for (j = 0; j < arr2.length; j++) {
		let num = arr1.lastIndexOf(arr2[j]);
		lastIndexArr.push(num);
	}
	return lastIndexArr;
};

var removeDup = function (arr1, arr2) {
	let finalResult = [];
	for (k = 0; k < arr2.length; k++) {
		finalResult.push(arr1[arr2[k]]);
	}
	return finalResult;
};

var final = removeDup(testarr, lastIndex(temparr, findDup(temparr)));

console.log(temparr);
console.log(findDup(temparr));
console.log(lastIndex(temparr, findDup(temparr)));
console.log(removeDup(testarr, lastIndex(temparr, findDup(temparr))));
console.log(final);
