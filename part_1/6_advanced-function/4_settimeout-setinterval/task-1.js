'use strict';

function printNumbers(from, to) {
  let now = from;

  const timerId = setInterval(function () {
    alert(now);

    if (now === to) {
      clearInterval(timerId);
    }

    now++;
  }, 1000);
}

printNumbers(2, 6);

function printNumbers(from, to) {
  let now = from;

  setTimeout(function run() {
    alert(now);

    if (now < to) {
      setTimeout(run, 1000);
    }

    now++;
  }, 1000);
}

printNumbers(2, 6);
