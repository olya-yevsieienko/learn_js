'use strict';

function getSecondsToday() {
  const nowDate = new Date();

  let today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

  const seconds = Math.round((nowDate - today) / 1000);

  return seconds;
}

alert( getSecondsToday() );
