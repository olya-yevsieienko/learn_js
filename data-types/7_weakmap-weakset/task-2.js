'use strict';

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let dateMap = new WeakMap();

dateMap.delete(messages[0], new Date());
