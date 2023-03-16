'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getSalariesSum(obj) {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }

  return sum;
}

getSalariesSum({}); // 0
getSalariesSum(salaries); // 390
