'use strict';

const button = document.querySelector('.button');
const list = document.querySelector('.menu');
const buttonImg = document.querySelector('.button__img');

button.onclick = function () {
  list.classList.toggle('menu--open');
  buttonImg.classList.toggle('button__img--open');
}
