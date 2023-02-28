'use strict';

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryEmployeeName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryEmployeeName = name;
    }
  }

  return maxSalaryEmployeeName;
}

console.log(topSalary(salaries));
