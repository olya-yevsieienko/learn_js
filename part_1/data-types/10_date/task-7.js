'use strict';

function getSecondsToTomorrow() {
  const nowDate = new Date();

  let tomorrow = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

  const seconds = Math.round((tomorrow - nowDate) / 1000);

  return seconds;
}

alert( getSecondsToTomorrow() );