var i = 2;
while (i < 131072) {
    console.log(i);
    var i = i * 2;
}
//############################################
var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold = Math.floor(Math.random() * 5) + 1;

do {
console.log(conesSold + " cones sold");
} while (allCones > conesSold);

do{
    console.log("cannot sell you " + conesSold + "I only have " +  allCones);
}while(allCones < conesSold);

do{
    console.log("Yay! I sold them all!");
}while( allCones === conesSold);
//############################################




