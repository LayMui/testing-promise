// import fetch
global.fetch = require("node-fetch");


async function f() {
    return 'hello';
}

f().then(value => {
    console.log(value);
});

async function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 10000);
    });
}

const myVar = f1();
console.log('myVar: ' + myVar);

// will return the following:
//myVar: [object Promise]
//hello

function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 2000);
    });
}

async function f3() {
    const specificNumber = await getSpecificNumber();
    console.log(specificNumber);
}

f3();

// Traditional way without the await keyword
function f4() {
    getSpecificNumber().then(specificNumber => {
        console.log(specificNumber);
    })
}
 
f4();

function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(value => console.log(value.message));
}

async function getRandomDogImage1() {
    try {
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        let value = await response.json();
        console.log(value.message);
    } catch(e) {
        console.log('Some error: '  + e);
    }
}

getRandomDogImage();
getRandomDogImage1().catch( e => console.log('fail to load'));

function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber1 is done');
            resolve(1);
        }, 1000);
    });
}

function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('printNumber2 is done');
            resolve(2);
        }, 1000);
    });
}


async function inParallel() {
    const promise1 = printNumber1();
    const promise2 = printNumber2();
    // use array destructuring
    const [ number1, number2] = [await promise1, await promise2]
    console.log(number1, number2);
}

inParallel();