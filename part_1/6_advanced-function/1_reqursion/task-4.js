'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printElement(list) {
  let copyList = list;

  while (copyList) {
    console.log(copyList.value);
    copyList = copyList.next;
  }
}

printElement(list);

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);
