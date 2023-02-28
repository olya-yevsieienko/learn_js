'use strict';

const x = +prompt('Введите число:', '');
const n = +prompt('Введите число:', '');

function pow(x, n) {
  return x ** n;
}

if (n < 1) {
  alert('Введите натуральное значение n: целое от 1 и выше');
} else {
  alert(pow(x, n));
}
