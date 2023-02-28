'use strict';

function sumInput() {
  let numArray = [];

  while (true) {
    let number = prompt('Enter number');

    if (number === '' || !isFinite(number) || number === null) {
      break;
    }

    numArray.push(+number);
  }

  let sum = 0;

  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }

  return sum;
}

sumInput();
