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