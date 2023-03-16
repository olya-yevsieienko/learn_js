'use strict';

function readNumber() {
  let number;

  while (!isFinite(number)) {
    number = prompt('Enter number', '');
  }

  if (number === null || number === '') {
    return null;
  }
  
  return +number;
}

readNumber();
