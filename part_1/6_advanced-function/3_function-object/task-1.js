'use strict';

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (num) => {
    return count = num;
  }

  counter.decrease = () => {
    return count -= 1;
  }

  return counter;
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // установить новое значение счётчика

alert(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert(counter()); // 10 (вместо 11)
