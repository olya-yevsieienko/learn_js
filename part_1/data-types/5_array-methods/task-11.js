'use strict';

function getAverageAge(users) {
  return users.reduce((prevValue, user) => prevValue + user.age, 0) / users.length;
}

// function getAverageAge(users) {
//   const countUsers = users.length;
//   let totalAge = 0;
  
//   users.forEach(user => {
//     totalAge += user.age;
//   })

//   const averageAge = totalAge / countUsers;

//   return averageAge;
// }

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );
