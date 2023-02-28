'use strict';

let user = {
  name: "John",
  years: 30
};


let { name, years, isAdmin = false } = user;

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

