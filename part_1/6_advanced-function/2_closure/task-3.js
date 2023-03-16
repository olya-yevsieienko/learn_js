'use strict';

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// функция не будет вызвана, т.к. вызов функции находится за пределами блока.
// будет ошибка.
