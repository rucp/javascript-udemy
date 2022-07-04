'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1987 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      const str = `You are a millenial, ${firstName}`;
      console.log(str);

      // reassigning outer scope's variable
      output = 'New OUTPUT';

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3)
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ruan';
calcAge(1996);
// console.log(age);
// printAge();
console.log(firstName);
