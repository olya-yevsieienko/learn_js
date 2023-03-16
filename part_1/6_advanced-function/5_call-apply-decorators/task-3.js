'use strict';

function debounce(f, ms) {
  let isDelay = false;

  function func() {
    if (isDelay) {
      return;
    }

    f.apply(this, arguments);

    isDelay = true;

    setTimeout(() => {
      isDelay = false;
    }, ms);
  }

  return func;
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован
