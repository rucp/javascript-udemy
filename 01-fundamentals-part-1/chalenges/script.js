/*
///////// Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;
console.log('bmiMark: ', bmiMark, 'bmiJohn: ', bmiJohn)

//////// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK 

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)}).`);
} else {
    console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})`);
}
*/
////// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; => 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17; => 23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 1143 or 114942
// 2. Execute the operations to check if you were righ
/*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57); 
console.log(5 + 6 + '4' + 9 - 4 - 2);

//// exercises by myself
// '13' - '5' + 6 + 7 - '5' - 5
// 17 + '17' - 13 - '5' + 5
// '55' - 6 - 2 + 45 + '5' - 3
// '66' + 22 - 15 + '13' - 56 + '27' - 32
// '56' + 65 + 22 - '33' + 44 - 24 + '24'
// '56' + 56 + 56 + '56' + 56
// 32 + '32' - 32 - 32 - 32 + '32'
*/

/*
/////// LECTURE: equality operators: == vs. ===
const numNeighbours = prompt('how many neighbour countries does your contry have?');

if(numNeighbours === 1) { // '1' === 1 => FALSE
    console.log('only 1 border!')
} else if (numNeighbours > 1 ) {
    console.log('more than 1 border')
} else {
    console.log('no borders')
}
// using strict operator and type conversion prevents us of having bugs in our program. in this case, if we don't convert our prompt and try to use '===', comparing to a number, the result will always be false, because the default value of a prompt is always a string, and string doesn't not equal a number, even if the content is the same.
*/

/*
/////////// LECTURE: logical operators
speaksEnglish = false;
hasLessThanFiftyMillion = false;
isIsland = false;

if(speaksEnglish && hasLessThanFiftyMillion && !isIsland) {
    console.log('you should live in brazil!')
} else {
    console.log(`brazil doesn't meet your criteria`)
}
*/

/*
/// CODING CHALLENGE #3

const dolphinsScore1 = 100;
const dolphinsScore2 = 112;
const dolphinsScore3 = 81;
const averageDolphin = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3
console.log(averageDolphin);

const koalasScore1 = 113;
const koalasScore2 = 95;
const koalasScore3 = 91;
const averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3
console.log(averageKoalas)

if (averageDolphin > averageKoalas && averageDolphin >= 100) {
    console.log('Dolphins is the winner! 😀')
} else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
    console.log('Koalas is the winner! 😁')
} else if (averageDolphin === averageKoalas && (averageDolphin && averageKoalas) >= 100) { 
    console.log(`It's a draw!!`)
} else {
    console.log('There`s no winners')
}
*/

/*
////// LECTURE: the switch statement

const language = 'portuguese';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('great language too :D')
}
*/

/*

///// LECTURE: The Conditional (Ternary) Operator

const brazilPopulation = 33;

console.log(brazilPopulation >= 33 ? "Brazil's population is above average" : "Brazil's population is below average")
*/

/////// CODING CHALLENGE #4

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100 * 20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)