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
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67
// // "

// var salesReport = [1, Jane, Janeway, 3,
//     3, Tricia, Triciason, 5,
//     4, Jeannette, Jeanson, 4,
//     5, Charles Emmerson III, Winchester, 2,
//     6, Chet, Chedderson, 8,
//     7, Chaiam, Chaiamson, 12,
//     8, Dale, Dalesinger, 1,
//     9, Zig, Ziglar, 50,
//     10, Henry, Kissinger, 1,
//     11, Arthur Herbert, Fonzarelli, 23,
//     12, Betty, Boop, 67];
//
//
// document.write("this is a test")
var reportArray = reportContents.split('\n');
console.log(reportArray);
console.log(reportArray.indexOf("1, Jane, Janeway, 3"));
var reportData = reportArray.slice(7);
console.log(reportData);
console.log('Number of employees is ' + reportData.length);
var sales = 0;
var employeeArray = [];
for (var i = 0; i<reportData.length; i++){
    var pick = reportData.slice(i, i+1);
    pick = pick.toString().split(',');
    employeeArray.push(pick);
    pick = pick.slice(3).toString();
    pick = Number(pick);
    sales += pick;
}
console.log("Total number of units sold is " + sales);
console.log("Average number of sales is " + sales/reportData.length);
function sortArray (a, b){
    return b[3]-a[3];
}
employeeArray.sort(sortArray);
var employeeList = "";
var employeePick = [];
for (var k = 0; k<employeeArray.length; k++){
    employeePick = employeeArray.slice(k, k+1).toString();
    employeeList += employeePick+ '\n';
}
console.log('The list of employees, sorted by number of sales is:\n' + employeeList);;