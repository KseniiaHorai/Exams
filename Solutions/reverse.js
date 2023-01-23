// Reverse dict, exchange keys and values
"use strict";

const reverseObject = (object) => {
  const newObject = {};
  const keys = Object.keys(object);
  for (let item of keys) {
    const newKey = object[item];
    newObject[newKey] = item;
  }
  return newObject;
};
require("../Tests/reverse.js")(reverseObject);
