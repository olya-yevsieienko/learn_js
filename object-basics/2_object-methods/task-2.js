'use strict';

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('Enter a:', 0);
    this.b = +prompt('Enter b:', 0);
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
