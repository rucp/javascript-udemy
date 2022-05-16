/*
/////////// START OF ASSIGNMENTS
// // lecture: values and variables

// let country = 'Brazil';
let continent = 'South America';
let population = 212;

console.log(continent, population); 

// // lecture: data types

// let isIsland = false;
let language;

// console.log(isIsland, typeof isIsland);
// console.log(population, typeof population);
// console.log(country, typeof country);
// console.log(language, typeof language);

// lecture: let, const and var

language = 'portuguese';
const country = 'Brazil';
const isIsland = false;
const birthDate = '08/06/1997';
console.log(language, birthDate);

console.log(country, continent, population); 

// lecture: basic operators

// console.log('country split in 2, people living in each half', population / 2 );
// console.log('population increased by 1', ++population)
// console.log(population > 6) // does brazil have more people than finland?
// console.log(population > 33)
// const description = `${country} is in ${continent}, and its ${population} milion people speak ${language}`;
// console.log(description);

const worldPopAverage = 33;
const calcBelowAverage = worldPopAverage - population;
const calcAboveAverage = population - worldPopAverage;

if (population == worldPopAverage) {
    console.log(`Brazil's population is on average;`);
} else if (population > worldPopAverage) {
    console.log(`Brazil's population is ${calcAboveAverage} million above average`);
} else {
    console.log(`Brazil's population is ${calcBelowAverage} million below average`);
}

/////////// END OF ASSIGNMENTS
*/


/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Ruan');
console.log(24);

let firstName = 'Maria';
console.log(firstName);
console.log(firstName);
// console.log(firstName);

let jonas_matilda = 'JM';
let $function = 26;

let person = 'jonas';
let PI = 3.1415;

// write clear variables
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

// dont do this
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year, typeof year);

year = 2022;
console.log(year, typeof year);

// doenst make any sense
console.log(typeof null); 
*/

/*
let, const and var
let age = 30;
age = 31;

 const birthYear = 1997;
//  birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Paulo'; // don't do this
console.log(lastName);
*/

/*
// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageRuan = now - 2018;
console.log(ageJonas, ageRuan);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Ruan';
const lastName = 'Paulo';
console.log(firstName + ' ' + lastName);

// assignment operatores
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageRuan); // >, <., >=, <=
console.log(ageRuan >= 18);

const isFullAge = ageRuan >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
//operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageRuan = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10;
console.log(x, y);
const averageAge = (ageJonas + ageRuan) / 2
console.log(ageJonas, ageRuan, averageAge);
*/

/*

const firstName = 'Ruan';
const job = 'programmer';
const birthYear = 1997;
const year = 2022;

const Ruan = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(Ruan)

const ruanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(ruanNew)

console.log(`Just a regular string...`)

console.log('String with \n\ teste teste \n\ teste testte');

console.log(`
    String
    multiple
    lines
    oh
    my
`);

*/

/*
const age = 15;

if(age >= 18) {
    console.log(`Sarah can start driving license 😉`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young 😔 Wait another ${yearsLeft} years.`)
}

const birthYear = 2021;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23)

// type coercion
console.log(`I am ${23} years old`);
console.log(`23` + `10` + 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n)
*/

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

/*
const money = 100;

if(money) {
    console.log('dont spend it all 😅')
} else {
    console.log('you should get a job! 😔')
}

let height = 0;

if (height) {
    console.log('YAY! height is defined')
} else {
    console.log('height is undefined') // bug in our operation, bc height is actually 0, it's a truthy value, but it isnt undefined.
}
*/

/*
//// equality operators: == vs ===
const age = '18';
if(age === 18) console.log('you just became an adult (strict)')

if(age == 18) console.log('you just became an adult (loose)')

const favorite = Number(prompt(`what's ur favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 24) { 
    console.log('cool! 24 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('number is not 23 or 7')
}

if(favorite !== 23) console.log('why not 23?')
*/

/*
//////// logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);


if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/
/*
////// the switch statement

const day = 'friday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Not a valid day!')
}
*/

/*
///// statements and expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger!'
*/

const age = 19;
// age >= 18 ? console.log('i like to drink wine 🍷') : console.log('i like to drink water 🍼') 

const drink = age >= 18 ? 'wine 🍷' : 'water 🍼';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🍼';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🍼'}`)