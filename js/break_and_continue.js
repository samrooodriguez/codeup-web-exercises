function isNumeric(num) {
    return (!isNaN(parseFloat(num)))
}


var userInput;
do {

    userInput = prompt("please enter an odd number between 1 and 50 ");
    userInput = parseFloat(userInput);
    if (!isNumeric(userInput) && userInput % 2 === 1 && userInput >= 1 && userInput < 50) break;
}while(true);
console.log(userInput);

for (var i = 1; i <= 50; i+=2) {
    if (i === userInput) {
        console.log("Yikes! Skipping the number" + i);
         continue;
    }
        console.log("here is an odd number " + i);
}