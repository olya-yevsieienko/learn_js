'use strict';

let user = {
  name: "Василий Иванович",
  age: 35
};

const readUser = JSON.parse(JSON.stringify(user));
