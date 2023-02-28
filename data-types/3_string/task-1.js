'use strict';

function ucFirst(str) {
  if (!str.length || str.length === 1) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

ucFirst('olya'); // Olya
ucFirst('OLya'); // Olya
ucFirst('OLYA'); // Olya
