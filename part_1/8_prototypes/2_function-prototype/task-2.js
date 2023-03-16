'use strict';

function Animal(name) {
  this.name = name;
}

const rabbit = new Animal('Roger');
const rabbit2 = new rabbit.constructor('Rob');

console.log(rabbit.name);
console.log(rabbit2.name);
