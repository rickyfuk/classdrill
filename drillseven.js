var inputByUser = prompt('Please enter any number');
console.log(inputByUser - 1);

if (isNaN(inputByUser)) {
	alert('false');
} else if (math.ceil(inputByUser) !== inputByUser) {
	alert('false');
} else {
	alert('true');
}
