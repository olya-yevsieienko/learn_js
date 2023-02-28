'use strict';

function extractCurrencyValue(str) {
  return +str.slice(1);
  // return parseInt(str.match(/\d+/));
}

console.log(extractCurrencyValue('$120'));