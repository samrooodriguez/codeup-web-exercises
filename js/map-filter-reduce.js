const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// 1.Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const languages = users.map(function(item){
    return item.languages.length >= 3;
});
console.log(languages);

// 2.Use .map to create an array of strings where each element is a user's email address

let emails = users.map(function (item){
    return item.email;
});
console.log(emails);

// 3.Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate
// the average.

years = users.map(function(item){
    return item.yearsOfExperience;
});

let sum = years.reduce((a, b) => a + b, 0);
console.log(sum); // 35
console.log(sum / years.length); // 7

// 4.Use reduce to get the longest email from the list of users.
let emails = users.map(function (item){
    return item.email;
});
var longest = emails.reduce(function (a, b) { return a.length > b.length ? a : b; });
console.log(longest);

// 5.Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let names = users.map(function(item){
    return item.name
});
console.log(names);

names.toString();
