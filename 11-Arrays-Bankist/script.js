'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// 142

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// with the slice method, we can extract part of any array but without changing the original array

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // => copy the array

// SPLICE
// the splice method works in almost the same way as slice, but the fundamental difference is that it does actually change the original array

// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1);
arr.splice(1, 2); // differently from the slice, the splice actually return the position in the second parameter
console.log(arr); // ['a', 'd'] => array mutated

// REVERSE
// OBS: the reverse method DOES change the original array
arr = ['a', 'b', 'c', 'd', 'e']; // restoring the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']

// CONCAT
// used to concatenate two arrays
// it DOESNT mutate the original array
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join(' - ')); // 'a - b - c - d - e - f - g - h - i - j' => a string 

*/

/*
// 143

//
const arr = [23, 11, 52];
console.log(arr[0]); // 23

// AT
console.log(arr.at(0)); // 23 => array at positiong 0

// getting the last array element
console.log(arr[arr.length - 1]); // one way
console.log(arr.slice(-1)[0]); // another way with slice

console.log(arr.at(-1)); // better way with AT

// if you want to get the last element of an array or start couting from the end, when you should use the AT method
// also, if you want to do somthing called "method chaining" => later in the course, AT is also perfect for that

// if you just want to quickly get a value from a array, just like the first element, then you can just use the bracket notation

// OBS: AT also works in strings.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Momevent ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------- FOR EACH -------------');
// forEach => forEach is technically a higher order function as we learned in the last section, which requires a callback function, in order to tell it what to do.
// so... its the forEach method here that will call this callback function
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Momevent ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

/* When should you use forEach and when should you use the for of loop?

One fundamental difference between the two of them is that you cannot break out of a forEach loop. So the continue and break statements do not work in a forEach loop at AbortController. So instead, the forEach will always loop over the entire Array.
*/