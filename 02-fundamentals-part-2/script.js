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