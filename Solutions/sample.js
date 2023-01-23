// Get one random element from an array
"use strict";

const getRandomElement = (array) => {
  const getRandomInteger = (max) => {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
  };
  const randomArrNumber = getRandomInteger(array.length);
  const randomElement = array[randomArrNumber];
  return randomElement;
};
require("../Tests/sample.js")(getRandomElement)
