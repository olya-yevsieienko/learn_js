'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function sortedLetters(word) {
  return word
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    const sorted = sortedLetters(word);
    map.set(sorted, word);
  }

  return [...map.values()];
}

console.log( aclean(arr) );