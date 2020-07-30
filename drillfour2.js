var numArray = [];
var total = 0;

function addNum() {
	var needNum = confirm('Do you need another number?');
	if (needNum) {
		var inputByUser = parseInt(prompt('please enter any number'));
		numArray.push(inputByUser);
		addNum();
	}
}
addNum();
console.log(numArray);
console.log(numArray[1]);
console.log(numArray.length);

newFunction();
// console.log(total + numArray[1]);
var average = total / numArray.length;
console.log(average);

function newFunction() {
	console.log(numArray);
	for (var i = 0; i < numArray.length; i++) {
		total = total + numArray[i];
		console.log('for loop is running');
		console.log(total);
	}
}
