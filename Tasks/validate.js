// Validate person name
'use strict';

const isValid = (name) => {
  const isString = (typeof(name) !== 'string' ||
      name.trim() === '' ||
      !name.includes(' ')
  );
  if (isString) return false;

  for (const letter of name) {
    if (letter === ' ') continue;
    const letterEncoding = letter.toLowerCase().charCodeAt(0);
    const isNameCorrect = letterEncoding < 97 || letterEncoding > 122;
    if (isNameCorrect) return false;
  }

  return true;
};

require('../Tests/validate.js')(isValid);
