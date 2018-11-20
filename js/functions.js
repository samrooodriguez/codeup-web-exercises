"use strict";

function sayHello(name) {
return "Hello to " + name;
}

var helloMessage = sayHello("Sam") ;
console.log(helloMessage) ;

var myName = "Sam " ;
console.log(sayHello(myName)) ;



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

function isTwo(number) {
    return number ===2 ;
}
console.log("Is 1 ===2? :" +isTwo(1));
console.log("Is 1 ===2? :" +isTwo(2));
console.log("Is 1 ===2? :" +isTwo(3));

console.log("The Random Number is: " + random);
console.log("It is " + isTwo(random) + "that the random number is 2.") ;



var total = parseFloat(prompt("what was the total price of the meal?")) ;
var tipPercentage = parseFloat(prompt("What percent tip would you like to leave? Enter 20 for 20%")) ;
tipPercentage = tipPercentage / 100;
function  calculateTip(tipPercentage, total) {
    return total * tipPercentage;
}
var tipAmount = calculateTip( tipPercentage , total) ;
var finalTotal = tipAmount + total ;

alert("on a $ " + total + " bill, with a " + tipPercentage + " tip, your total is:" + finalTotal ) ;
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  * > applyDiscount(45.99, 0.12) // 40.4712
