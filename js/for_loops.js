// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

function showMultiplicationTable(input){
    console.log(input + " X 1 = " + (input*1));
    console.log(input + " X 2 = " + (input*2));
    console.log(input + " X 3 = " + (input*3));
    console.log(input + " X 4 = " + (input*4));
    console.log(input + " X 5 = " + (input*5));
    console.log(input + " X 6 = " + (input*6));
    console.log(input + " X 7 = " + (input*7));
    console.log(input + " X 8 = " + (input*8));
    console.log(input + " X 9 = " + (input*9));
    console.log(input + " X 10 = " + (input*10));
}
// #########################################################################
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }
for(var i = Math.floor(Math.random() * 200) + 20; i % 2 !== 0; i++){
    if(i % 2 !== 0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd");
    }
}

