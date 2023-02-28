'use strict';

let number;

while (number !== 100) {
  number = +prompt('Введите число больще 100', 0);

  if (number === null) {
    break;
  }
}