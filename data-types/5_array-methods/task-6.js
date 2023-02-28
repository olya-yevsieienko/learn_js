'use strict';

function Calculator() {
  this.methods = {
    "+": ((a, b) => a + b),
    "-": ((a, b) => a - b),
    "*": ((a, b) => a * b),
    "/": ((a, b) => a / b),
    "**": ((a, b) => a ** b),
  }

  this.calculate = function(str) {
    const chars = str.split(' ');

    const a = +chars[0];
    const operator = chars[1];
    const b = +chars[2];

    return this.methods[operator](a, b);
  }

  this.addMethod = function(name, func) {
    return this.methods[name] = func;
  }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
