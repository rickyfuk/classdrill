var workArray=[];
var maxNUM = 0;

do{
    var input = prompt("please enter a number");
    workArray.push(input);
    var stopGetNum = confirm("any more number? (ok for yes/ cancel for no)")
} while (stopGetNum !== false)

for (i=0;i<(workArray.length);i++){
    if(maxNUM < workArray[i]){
        maxNUM = workArray[i];
    }
}
