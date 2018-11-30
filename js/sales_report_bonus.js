// // Output should include:
// // // - total number of employees
// // // - total number of units sold
// // // - avg units sold per employee
// // // - Then output should share employee production, ordered from highest to lowest # of units
// // // * Units   |     Full Name       |   Employee Number
// // // * 5             Bob Boberson        2
// //
// // var reportContents = "Monthly Sales Report"
// // Date: 03-17-2015
// // Office: Codeup
// // ===================================================
// // Employee Number, First Name, Last Name, Sales Units
// // ***************************************************
// // 1, Jane, Janeway, 3
// // 3, Tricia, Triciason, 5
// // 4, Jeannette, Jeanson, 4
// // 5, Charles Emmerson III, Winchester, 2
// // 6, Chet, Chedderson, 8
// // 7, Chaiam, Chaiamson, 12
// // 8, Dale, Dalesinger, 1
// // 9, Zig, Ziglar, 50
// // 10, Henry, Kissinger, 1
// // 11, Arthur Herbert, Fonzarelli, 23
// // 12, Betty, Boop, 67
// // "
//T0D0 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// -create a function that converts letters into numbers - done
// -create a function that takes in user input data and returns an array of that data - done
// -create a function that adds (.unshift();) new data to existing array (data base)
// *****all employee data should be an array nested within the original array******
// -create a function that outputs all employee info with just the ID number given
//            alert ("invalid") when invalid info is entered in
// -create a variable (employee number) and assign it an array containing all data for given employee
// -create a form where user can input data easily
//        within form you should have an input for Employee Number - First Name - Last Name - Sales Units(Xus) [us = Units Sold]
//          it should also probably include a timestamp as to WHEN each employee has been created
// notes: will essentially be a library that contains all data that output any relevant data when called
//               the idea behind converting letters to numbers would be some level of security
//                -prompt user with " make sure to type in all lower case" in form
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function charToNumber (s, i) {
    return parseInt(s.charAt(i), 36) - 9;
}
function employee(a, b, c, d){
return Array(a, b, c, d);
}

