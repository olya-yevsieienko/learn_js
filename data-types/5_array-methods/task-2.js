'use strict';

function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
}

function filterRange(arr, a, b) {
  let newArray = [];

  for (let num of arr) {
    if (num >= a && num <= b) {
      newArray.push(num);
    }
  }

  return newArray;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
