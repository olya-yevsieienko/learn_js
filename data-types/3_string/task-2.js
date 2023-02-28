'use strict';

function checkSpam(str) {
  const string = str.toLowerCase();

  return string.includes('viagra') || string.includes('xxx');
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");
