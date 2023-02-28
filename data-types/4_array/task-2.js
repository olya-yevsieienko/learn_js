'use strict';

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.round(styles.length - 1) / 2] = 'Классика';
alert( styles.shift() );
styles.unshift('Рэп', 'Регги');

console.log(styles);
