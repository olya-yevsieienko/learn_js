'use strict';

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

const someObj = {};

function A() {
  return someObj;
}

function B() {
  return someObj
}

let a = new A();
let b = new B();

alert( a == b ); // true
