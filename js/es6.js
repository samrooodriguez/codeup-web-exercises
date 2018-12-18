/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: "sam",
        email: "sam27rodriguez@gmail.com",
        languages: ['html', 'css', 'javascript']
    }
];

// TODO: fill in your name and email and add some programming languages you know - done
// to the languages array

// TODO: replace the `var` keyword with `const`, then try to reassign a variable - done

// declared as `const`
const name = 'your_name_here';
const email = '';
const languages = [];

// TODO: rewrite the object literal using object property shorthand - done

// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });
//########################################
let name = "";
$('#submit-button').on('click', (event) => {
    $('#name-input').on('input', (event) => {
        name = event.target.value
    })
});
let newUser = {
    type: 'user',
    name,
    email,
    languages
};
$('button').on('click', (newUser) => {
    users.push(newUser);
});
//########################################
// TODO: replace `var` with `let` in the following variable declarations - done

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions - done
users.forEach((user) => {
    return emails.push(user.email);
});
users.forEach((user) => {
    return names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration - done

let developers = [];
users.forEach(function (user) {

    // TODO: rewrite the code below to use object destructuring assignment - done
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    const {name, email, languages} = user;
// TODO: rewrite the assignment below to use template strings - done

//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

    developers.push(`${name}'s email is ${email}${name} knows ${languages.join(',')}`);


// TODO: Use `let` for the following variable - done
    let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop - done
//    for(let ELEMENT of ITERABLE) {
//          code~code~code~
// }
// developers.forEach(function (developer) {
    for (let developer of developers) {

    }
    // TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
});
list += '</ul>';
