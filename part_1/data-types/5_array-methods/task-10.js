'use strict';

let arr = [1, 2, 3];

function shuffle(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const randomNumber = Math.round(min - 0.5 + Math.random() * (max - min + 1));

    if (!newArr.includes(randomNumber)) {
      newArr.push(randomNumber);
    } else {
      i--;
    } 

  }

  return newArr;
}

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomJ = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[randomJ]] = [arr[randomJ], arr[i]];
  }

  return arr;
}

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
