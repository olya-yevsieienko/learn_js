'use strict';

function camelize(str) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (str[i] === '-') {
      char = str[i + 1].toUpperCase();
      i++;
    }

    newStr.push(char);
  }

  return newStr.join('');
}

function camelize(str) {
  return str
    .split('-')
    .map((word, i) => (i === 0) ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

camelize("background-color") // == 'backgroundColor';
camelize("list-style-image") // == 'listStyleImage';
camelize("-webkit-transition") // == 'WebkitTransition';
