'use strict';

/*
// // 128
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1; // ES5
  // price = price || 199; // ES5

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2, 681);
createBooking('LA321', 4);
createBooking('TA123', 3);

// createBooking('LH123', , 681); // we can not skip arguments
// createBooking('LH123', undefined, 681); // this is allowed

*/

/*
// // 129

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 6513146441,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 6513146441) {
    alert('Check in! 😀');
  } else {
    alert('Wrong password 😓');
  }
};

checkIn(flight, jonas); // Check in!
console.log(flight); // keeps the same
// that happend because 'flight' is a string, in other words, a primitive value. when it's passed as a argument to a function, the argument inside of the function is actually a copy

console.log(jonas); // its changed
// when we pass a reference type to a function, what is copied is just the reference in the memory heap.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // Wrong passport
*/

/*
// // 131
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function => takes in a function
const transformer = function (str, fn) {
  console.log(`Original string =>> ${str}`);
  console.log(`Transformed string =>> ${fn(str)}`);

  console.log(`Transformed by ::: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);// function called inside of the transformer function

transformer('JavaScript is the best!', oneWord); // function called inside of the transformer function

// JS uses callbacks all the time
const high5 = function () {
  console.log('😁');
};

document.body.addEventListener('click', high5); // each time is clicked, the function is called

['Jonas', 'Ruan', 'Murillo'].forEach(high5); // called 3 times, for each element

*/

/*
// // 132

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterlley = greet('Hey');
greeterlley('Ruan');
greeterlley('Murillo');

greet('Hello')('Ruan');

*/

/*
// // 133
const latam = {
  airline: 'Latam',
  iataCode: 'LA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// the CALL method
latam.book('5653', 'Ruan');
latam.book('9283', 'John');
console.log(latam);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = latam.book;

// book(23, 'Sarah Williams'); // does not work
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(latam, 294, 'Mary Cooper');
console.log(latam);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, '1098', 'Jovi Pardal');
console.log(swiss);

// the APPLY method ==> its not used in the modern JS
const flightData = [565, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // ==> better way
*/

/*
// // 134

// Bind method
// Just like the call method, bind also allows us to manually set the "this" keyword for any function call.
// Now, the difference is that bind does not immeadiately call the function. Instead, it returns a new function where the "this" keyword is bound.
// So it sets to whatever value we pass into bind.

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLA = book.bind(latam);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('João Pardal');

// with event listeners
latam.planes = 300;
latam.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes); // NaN => the THIS keyword is the button element. in a event handler function, the THIS keyword alaways points to the element on which that handler is attached to.
};
document
  .querySelector('.buy')
  .addEventListener('click', latam.buyPlane.bind(latam));

// partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value -> value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(300));

// chalenge => function returning another function

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

(function () {
  console.log(`This will never run again!`);
  const isPrivate = 23;
})();

(() => console.log(`This will never run again!`))();

*/

// 137

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // once this function is executed, it is not longer on the stack. but still the inner function inside secureBooking, which is the booker function, is still able to access the passengerCount.
// what makes this possible is a CLOSURE.
// we can say that a closure is makes a function "remember" all the variables that existed at the function's birthplace essentially

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// Any function always has access to the variable enviroment of the execution context in which the function was created.

// Now, in the case of "booker', this function was created in the execution context of "secureBooking", which was popped off the stack previously, remember?

// So, therefore the Booker function will get access to this variable environment which contains the 'passengerCount' variable. And this is how the function will be able to read and manipulate the 'passengerCounte' variable.

// And so, it's this connection that we call closure.