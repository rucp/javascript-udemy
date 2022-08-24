'use strict';

// 1 => toUpperCase
// 0 => toLowerCase

const LettersUpperLowerCase = str => {
  let dividedStr = str.toLowerCase().split('');
  let n = 0;

  for (let i = 0; i < dividedStr.length; i++) {
    n = n === 1 ? 0 : 1;
    if (n === 1) {
      dividedStr[i] = dividedStr[i].toUpperCase();
    } else {
      dividedStr[i] = dividedStr[i].toLowerCase();
    }
  }
  dividedStr = dividedStr.join('');
  return dividedStr;
};

const cbFn = (str, fn) => {
  console.log(`Testando!!! ${fn(str)}`);
};

cbFn(
  'TEM COISA MAIS IRRITANtE DO QUE GENTE QUE ESCREVE ASSIM',
  LettersUpperLowerCase
);
