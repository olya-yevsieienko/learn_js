'use strict';

function isEmpty(obj) {
  for (const key in obj) {
    if(key) {
      return false;
    }
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false