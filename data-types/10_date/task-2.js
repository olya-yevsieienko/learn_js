'use strict';

function getWeekDay(date) {
  const days = ['BC', 'ПН', 'BT', 'CP', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );
