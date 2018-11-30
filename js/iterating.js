(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

var names = ["Sam", "Bob", "John", "Mark"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);




    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]); // sam
    console.log(names[1]); // Bob
    console.log(names[2]); // John
    console.log(names[3]); // Mark

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function (name) {
    console.log(name);
});

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     // * - last: returns the last item in the array
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(i){
       return i[0];
    }
    function second(i){
       return i[1];
}
    function last(i) {
        return i[i.length - 1];
}

//bonuses

function oneHundred(){
   return Array.apply(null, {length: 100}).map(Number.call, Number)
}

// function reverse(input){
// var output = [];
// for (var i = input.length - 1; i >= 0; i--)
//     output.push(input[i]);
// }
// return output;
// }

function sumAll(input) {

}

function multiplyAll(input) {

}











































})();
