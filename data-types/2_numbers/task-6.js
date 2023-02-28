'use strict';

function randomInteger(min, max) {
  return +((min + Math.random() * (max - min)).toFixed());
  // return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
