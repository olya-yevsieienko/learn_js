'use strict';

// Префиксный вариант ++i:

let i = 0;

while (++i < 5) alert( i ); 
// 1 < 5 => alert(1);
// 2 < 5 => alert(2);
// 3 < 5 => alert(3);
// 4 < 5 => alert(4);

// Постфиксный вариант i++

let i = 0;

while (i++ < 5) alert( i );
// 0 < 5 => alert(1);
// 1 < 5 => alert(2);
// 2 < 5 => alert(3);
// 3 < 5 => alert(4);
// 4 < 5 => alert(5);