'use strict';

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert(bound.test); // что выведет? почему?
// undefined, у bound нет свойства test
