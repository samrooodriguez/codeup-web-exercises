const wait = (seconds) => {

    let promise1 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("You'll see this after " + seconds  + " seconds");
        }, seconds * 1000);
    });
    promise1.then(function (value) {
        console.log(value);
    });

    console.log(promise1);
};
wait();

let myToken = 'e85deffa35a9b328567443b2c4401d8bc8006d62';


fetch("https://api.github.com/users/:username/events/public", {headers: {'Authorization': myToken}});



let chrisGetsAdog = new promise(function(resolve,reject){

    let getsAdog = true;
    let day = new Date();
    let date = "august";

    if( getsAdog === day){
        resolve('Yay! Chris has a dog!');
    }else {
        reject("no dog for Chris :(");
    }});

chrisGetsAdog.then(function (fromResolve) {
    console.log(fromResolve);
}).catch(function (fromReject) {
console.log(fromReject);
});



let doesSamLikeKayaking = new Promise(function (resolve) {
    resolve("I do like kayaking");
});
let doesSamLikeSuping = new Promise(function (resolve) {
    resolve("I do like Stand Up Paddle Boarding");
});
let doesSamLikeScubaDiving = new Promise(function (resolve) {
    resolve("I would love to Scuba dive");
});
Promise.all([doesSamLikeKayaking(), doesSamLikeSuping(), doesSamLikeScubaDiving()]).then(function () {
    console.log('Yes to all of those things!');
});


'use strict';

// es5
// function wait(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, delay)
//     })
// }

// es6 one liner
// const wait = delay => new Promise((resolve, reject) => setTimeout(resolve, delay))

// es6
const wait = delay => new Promise((resolve, reject) => {
    setTimeout(resolve, delay)
})

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const API_KEY = '3fdee4dc6bfb4b2b486a498e59b55693b18d162f';
const FETCH_OPTIONS = {
    headers: {'Authorization': `token ${API_KEY}`}
}

function checkResponseErrors(response) {
    if (response.status !== 200) {
        return Promise.reject(response)
    }
    return Promise.resolve(response)
}

function filterNonPushEvents(events) {
    const onlyThePushEvents = []
    events.forEach(function(event) {
        if (event.type === 'PushEvent') {
            onlyThePushEvents.push(event)
        }
    })
    return onlyThePushEvents
}

function getMostRecentCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`, FETCH_OPTIONS)
        .then(checkResponseErrors)
        .then(response => response.json())
        // type is PushEvent
        // .then(events => events.filter(event => event.type === 'PushEvent'))
        .then(filterNonPushEvents)
        .then(pushEvents => pushEvents[0])
        .then(mostRecentPushEvent => mostRecentPushEvent.created_at)
}

// - add an event listener to submit button, when the button is clicked
//     - grab the value from the input box
//     - call my function and use the results
//     - write to the dom

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', function(e) {
    const input = document.getElementById('github-username')
    const username = input.value
    getMostRecentCommitDate(username)
        .then(commitDate => {
            const output = document.querySelector('#output')
            output.innerHTML = `The last commit for ${username} was ${commitDate}`
        })
})