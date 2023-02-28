'use strict';

function truncate(str, maxlength) {
  const cutStr = str.slice(0, maxlength - 1) + '...';
  return (str.length < maxlength) ? str : cutStr;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);
