'use strict';

// #1 - линейная сложность.
function sumTo(n) {
  if (typeof (n) !== 'number') {
    return 'Invalid value, please enter a number';
  }

  let sum = 0;

  for (let i = n; i > 0; i--) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(100));
console.log(sumTo("100"));


// #2 - самый медленный вариант, при больших значениях n есть вероятность переполнения стека.
function sumTo(n) {
  if (typeof (n) !== 'number') {
    return 'Invalid value, please enter a number';
  }

  return (n === 1) ? n : n + sumTo(n - 1);
}

console.log(sumTo(100));


// #3 - самый быстрый вариант.
function sumTo(n) {
  if (typeof (n) !== 'number') {
    return 'Invalid value, please enter a number';
  }

  const a1 = 1;
  const aN = a1 + (n - 1);
  const sum = ((a1 + aN) * n) / 2;

  return sum;
}

console.log(sumTo(100));
