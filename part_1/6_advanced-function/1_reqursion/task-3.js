'use strict';

function fib(n) {
  let firstNum = 1;
  let secondNum = 1;

  for (let i = 3; i <= n; i++) {
    let thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
  }

  return secondNum;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
