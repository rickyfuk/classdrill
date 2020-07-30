var inputByUser = prompt("please enter any word");
var firstArray = [];
var secondArray = [];
var finalresult = [];
var a=0;

for (i=0; i<inputByUser.length;i++){
    firstArray[i] = inputByUser.charAt(i);
}


for (j=inputByUser.length-1; j>-1;j--){
    secondArray[a]= inputByUser.charAt(j);
    a++;
}

console.log(firstArray);
console.log(secondArray);

for (k=0;k<inputByUser.length;k++){
    if (firstArray[k] === secondArray[k]){
        finalresult[k] = true;
    } 
    else {
        finalresult[k]=false;
    }
}

var falsefinder = finalresult.indexOf(false);
console.log(finalresult);

if (falsefinder != -1){
    alert("the string is palindrome")
}
else {
    alert("the string is NOT palindrome")
}
