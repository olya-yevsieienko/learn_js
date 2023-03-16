'use strict';

function throttle(f, ms) {
  let isTtrottled = false;
  let savedArgs = null;
  let savedThis = null;

  function wrapper() {
    if (isTtrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    f.apply(this, arguments);
    isTtrottled = true;

    setTimeout(function () {
      isTtrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms)
  }

  return wrapper;
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)