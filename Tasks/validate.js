// Validate person name
'use strict';

const validateName = (name) => {
    if (typeof(name) !== 'string') {
        return false;
    }

    if (name.trim() === '') {
        return false;
    }

    if (!name.includes(' ')) {
        return false;
    }

    const ASCIIFirstLetter = 97;
    const ASCIILastLetter = 122;

    for (let letter of name) {
        if (letter === ' ') continue;
        if (letter.toLowerCase().charCodeAt(0) < ASCIIFirstLetter) {
            return false;
        }
        if (letter.toLowerCase().charCodeAt(0) > ASCIILastLetter) {
            return false;
        }
    }

    return true;
};
require('../Tests/validate.js')(validateName);

