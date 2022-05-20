/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win 🏆(${avgDolphins} vs ${avgKoalas})`
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win 🏆(${avgKoalas} vs ${avgDolphins})`
    } else {
        return `It's a draw`
    }
}

console.log(checkWinner(averageDolphins, averageKoalas));
// console.log(checkWinner(655, 300));

// TEST 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(averageDolphins, averageKoalas))
*/

/*
CHALLENGE #2
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);
const total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]];
console.log(total)
*/

/*
/// CHALLENGE #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark.calcBMI();

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName} (${mark.BMI.toFixed(2)}) is higher than ${john.fullName} (${john.BMI.toFixed(2)})`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName} (${john.BMI.toFixed(2)}) is higher than ${mark.fullName} (${mark.BMI.toFixed(2)})`)
} else {
    console.log('They have the same BMI')
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips, bills, totals);


function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// console.log(calcAverage([2, 3, 4, 5]));
console.log(calcAverage(tips));