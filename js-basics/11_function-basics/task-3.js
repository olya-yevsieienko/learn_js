'use strict';

function min(a, b) {
  return a > b ? b : a;
}

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

min(2, 5);
min(3, -1);
min(1, 1);
