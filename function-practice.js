function reverseAnumber(){
    i = i + "";
return i.split("").reverse().join("");
}
console.log(reverseAnumber(987654321));
// #########################################################################
function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
// Check whether the string is empty or not
    if(cstr==="") {
        console.log("Nothing found!");
        return false;
    }
// Check if the length of the string is even or odd
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
// If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
// If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
// Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match
        if (cstr[x] != cstr.slice(-1-x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
};

console.log(check_Palindrome("Kayak"));
// #########################################################################

function substrings(str1)
{
    var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++)
    {
        array1[x]=str1.substring(x, y);
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");
// #########################################################################
//this function will calculate the area of a rectangle

function rectangleAreaCalculator(w, h){
    return w * h;
}
// #########################################################################
//this function will calculate the volume of a rectangular prism
function rectangleVolume(w,h,l){
return w*h*l;
}
