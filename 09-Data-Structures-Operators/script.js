// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const openingHours = {
//   thu: {
//     open: 8,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: openingHours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// // if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon?.open);

// // if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   // console.log(`On ${day}, we open at ${open}`);
// }

// const arr = [7, 8, 9];
// const barNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(barNewArr);

// const newArr = [1, 2, ...arr];
// // console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// const starterMenuCopy = [...restaurant.starterMenu];

// // join 2 arrays or more
// // const menu = [...mainMenuCopy, ...starterMenuCopy];
// // console.log(menu);

// // iterables: arrays, strings, maps, sets, not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S'];
// // console.log(letters);

// // real world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];

// // restaurant.orderPasta(...ingredients);

// // obj
// const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Giusseppe' };
// // console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// /*
// ////////////////////////////////////
// // destructuring objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: nome,
//   openingHours: horarioAbertura,
//   categories: categoria,
// } = restaurant;
// console.log(nome, horarioAbertura, categoria);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// */

// /*
// destructuring Arrays
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// //receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
// */

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //     console.log(sum);
// //   }
// // };

// // add(2, 4);
// // add(1, 4, 6, 8, 12);
// // add(1, 5, 8, 9, 1, 12);

// // const x = [23, 5, 7];
// // add(...x);

// // const res1 = {
// //   name: 'Capri',
// //   // numGuests: 20,
// //   numGuests: 0,
// // };

// // const res2 = {
// //   name: 'Capri',
// //   owner: 'Giovanni Rosi',
// // };

// // // res1.numGuests = res1.numGuests || 10;
// // // res2.numGuests = res2.numGuests || 10;

// // res1.numGuests ??= 10;
// // res2.numGuests ??= 10;

// // res1.owner &&= '<ANONYMOUS>';
// // res2.owner &&= '<ANONYMOUS>';

// // // console.log(res1);
// // // console.log(res2);

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // // for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   // console.log(item);
// // }

// // // property VALUES
// // const values = Object.values(openingHours);
// // // console.log('property values', values);

// // // entire object
// // const entries = Object.entries(openingHours);
// // console.log('entire object', entries);

// // // [key, value]
// // for (const [day, { open, close }] of entries) {
// //   console.log(`On ${day} we open at ${open} and close at ${close}`);
// // }

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Ruan')); // {"R", "u", "a", "n"}

// console.log(ordersSet.size); // 3 => tamanho do Set
// console.log(ordersSet.has('Pizza')); // true => retorna se o elemento
// // existe ou não no Set
// ordersSet.add('Garlic Bread'); // its added to the Set
// ordersSet.add('Garlic Bread'); // this one is ignored
// ordersSet.delete('Risotto'); // deletes de element in the Set
// // ordersSet.clear(); // limpar todos os elementos do Set

// for (const order of ordersSet) console.log(order);

// // What will be logged in first example and in second example?

// // let var1;
// // console.log(var1);
// // console.log(typeof var1);

// // let var2 = null;
// // console.log(var2);
// // console.log(typeof var2);

// // Type of variable will be an Object, because there is no such type as null

// // Undefined means that that variable is declared, but the value is not assigned yet inside this variable.

// // Null in JavaScript is an assignment value, which means it's a value we can assign inside the variable in our code.

// // But what is really the difference between null and undefined?
// // Em ambos os casos, significa que o valor da variável ainda não existe. Nós podemos usar ambos os casos, vai depender na verdade do estilo de código pessoal, ou o que a equipe prefere.

// /*
// const rest = new Map();
// rest.set('name', 'Clasico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :/');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2); // deletes the second location

// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size); // show how many items there is

// // rest.clear(); // removes all the elements
// */

// /*

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// // // convert object to map
// const hoursMap = new Map(Object.entries(anyObject));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer: ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));

// console.log(question.get(question.get('Correct') === answer)); // returns true or false

// // convert map to array
// console.log([...question]);
// console.log(...question.keys());
// console.log(...question.values());

// task = {
//   task: 'Code',
//   date: 'today',
//   repeat: true,
// };

// task = new Map([
//   ['task', 'Cide'],
//   ['date', 'today'],
//   [false, 'Start coding'],
// ]);
//  */

// // const airline = 'LATAM OMG TESTING';
// // const plane = 'A320';

// // console.log(plane[0]); // show the letter in the position
// // console.log(airline.length); // show the length of the string

// // console.log(airline.indexOf('L')); // 0
// // console.log(airline.lastIndexOf('M')); // 4
// // console.log(airline.indexOf('LATAM'));

// // console.log(airline.slice(4));
// // console.log(airline.slice(1, 4)); //

// // console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// // console.log(airline.slice(-2));
// // console.log(airline.slice(-2));

// // const checkMiddleSeat = function (seat) {
// //   // B and E are middle seats
// //   const s = seat.slice(-1);
// //   console.log(s);
// //   console.log(
// //     s === 'B' || s === 'E' ? `it's a middle seat 😥` : `you got lucky, not a middle seat 😎`
// //   );
// // };

// // checkMiddleSeat('11C');

const airline = 'Latam Linhas Áereas';
console.log(airline.toLowerCase()); //  latam linhas áereas
console.log(airline.toUpperCase()); // LATAM LINHAS ÁEREAS

// Fix capitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase(); // jonas
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1); // Jonas
// console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim(); // 'hello@jonas.io'
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); //'288.97$';

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate')); // 'All passengers come to boarding gate 23, Boarding gate 23!';

// Boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (itens) {
  const baggage = itens.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife'); //
checkBaggage('Socks and camera'); // Welcome aboard
checkBaggage('Got some snacks and a gun for protection'); // You are NOT allowed on board

// Split and Join
console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
console.log('Ruan Carlos'.split(' ')); // ['Ruan', 'Carlos']

const [firstName, lastName] = 'Ruan Paulo'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Ruan PAULO

const capitalizeName = name => {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); // first letter of each
capitalizeName('ruan carlos'); // name gets upperCase

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++Go to gate 23!++++++++++

const maskCreditCard = number => {
  const str = number + ''; // we can also use String(number) here
  const last = str.slice(-3);
  const first = str.slice(3);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678900)); // ********900
console.log(maskCreditCard(22233345554455)); // ***********455
console.log(maskCreditCard('42482841012112142')); // **************142

// Repeat
const message2 = 'Bad weather... All departues delayed \n';
console.log(message2.repeat(4));

const planesInLine = number => {
  console.log(`There are ${number} planes in line ${'🛫'.repeat(number)}`);
};
planesInLine(5)
planesInLine(2)
planesInLine(3)
