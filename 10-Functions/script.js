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

book.call(swiss, ...flightData) // ==> better way