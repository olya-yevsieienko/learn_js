'use strict';

const userEnteredNum = +prompt('Введите число', 0);

if (userEnteredNum > 0) {
  alert(1);
} else if (userEnteredNum < 0) {
  alert(-1);
} else {
  alert(0);
}
