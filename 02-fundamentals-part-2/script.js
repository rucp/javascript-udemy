'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 565;
*/

/*
function logger() {
    console.log('My name is Ruan');
}

//calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 6);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function notasBimestre(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

const mediaFulano = notasBimestre(10, 5, 6);
const mediaCiclano = notasBimestre(5, 7, 3);
const mediaBeltrano = notasBimestre(10, 9, 8);

console.log(mediaCiclano);
console.log(mediaFulano);
console.log(mediaBeltrano);
*/

/*
// function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1997);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2)
*/

/*
// arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
// console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 45 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1997, 'Ruan'));
console.log(yearsUntilRetirement(2003, 'Bob'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 6;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function(birthYear) {
    return 2022 - birthYear;
} 

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 45 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🍂`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1997, 'Ruan'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
//////// Arrays
const friend1 = 'Michael';
const friend2 = 'Jonas';
const friend3 = 'Peter';

// qntd              1          2        3
// posição array     0          1        2
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]); // posição do array
console.log(friends[2]); // posição do array

console.log(friends.length); // qntd de elementos no array. não confundir com posição do array.
console.log(friends[friends.length-1]); // última posição do array. (qntd - 1)

friends[2] = 'Jay'; // em arrays, diferente dos dados primitivos, podemos mudar os valores de variáveis q tenham sido definidos como const.
console.log(friends)
// friends = ['bob', 'alice'] => this can't be done. we can change one element at the time, but not the entire Array

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; // podemos guardar diferentes valores em um mesmo array.

console.log(jonas);
console.log(jonas.length);

// exercise
const calcAge = function(birthYear) {
    return 2022 - birthYear;
}
const years = new Array(1991, 1984, 2008, 2020, 1997);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3)

const ages = new Array(
                    calcAge(years[0]), 
                    calcAge(years[1]), 
                    calcAge(years[years.length-1])
                    );
console.log(ages);

*/

/*
//// basic array operations (methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght)

friends.unshift('John');
console.log(friends)

// Remove elements
friends.pop();  // last
const popped = friends.pop();
console.log(popped)
console.log(friends)

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); // true

if(friends.includes('Steven')) {
    console.log('you have a friend called Steven')
}
*/

/*
//// Introduction to Objects

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter']
}
*/

/*
///// dot vs bracket notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter']
}
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

// const intestedIn = prompt(`What do you want to know about Jonas? choose between firstName, lastName, age, job and friends.`);

// if (jonas[intestedIn]) {
//     console.log(jonas[intestedIn]);
// } else {
//     console.log(`Wrong request! Choose again!`);
// }

jonas.location = 'Portugal';
jonas['Twitter'] = '@jonasschmedman';
console.log(jonas);

// Challenge 
// 'Jonas has 3 friends, and his best friend is called Michael'

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
*/

/*
/// objetos
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter'],
    hasDrivesLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDrivesLicense? `a`:`no`} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age); 

// Challenge
// "Jonas is  a 46-year old teacher and he has a/no driver's license"
console.log(jonas.getSummary())

*/

// console.log('Lifting weight repetition 🤸‍♀️');
// console.log('Lifting weight repetition 🤸‍♀️');
// console.log('Lifting weight repetition 🤸‍♀️');

/*
// for loops keeps running while condition is true
for(let rep = 1; rep <= 10; rep = rep + 2) {
    console.log(`Lifting weight repetition ${rep} 🤸‍♀️`);
}
*/

/*
/// looping arrays, breaking and continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    'Portugal',
    true
];
const types = new Array;

for(let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i])
};

console.log(types);


const years = [1972, 1978, 1994, 1997, 2003, 2021];
const ages = new Array;

for(let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);


// continue and break
console.log('------- ONLY STRINGS --------')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
};

console.log('------- BREAK WITH NUMBER --------')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
};
*/