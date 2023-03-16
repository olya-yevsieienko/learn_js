'use strict';

const n = 10;

for (let i = 2; i <= n; i++) {
  let flag = true;

  for (let j = 3; j < i; j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }
  
  if (flag) {
    console.log(i);
  }
}