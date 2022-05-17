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