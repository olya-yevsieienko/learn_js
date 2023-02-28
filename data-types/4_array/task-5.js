'use strict';

function getMaxSubSum(arr) {
  let maxSum = 0;
  let sumNow = 0;

  for (let i = 0; i < arr.length; i++) {
    sumNow += arr[i];
    maxSum = Math.max(maxSum, sumNow);

    if (sumNow < 0) {
      sumNow = 0;
    }
  }

  return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]) // == 5 
getMaxSubSum([2, -1, 2, 3, -9]) // == 6
getMaxSubSum([-1, 2, 3, -9, 11]) // == 11
