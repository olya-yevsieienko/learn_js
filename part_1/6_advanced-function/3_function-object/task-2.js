'use strict';

function sum(a) {
  let nowCounter = a;

  function f(b) {
    nowCounter += b;

    return f;
  }

  f.toString() = function () {
    return nowCounter;
  }
}

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
