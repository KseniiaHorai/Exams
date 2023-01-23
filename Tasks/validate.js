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
  
    for (let letter of name) {
      if (letter === ' ') continue;
      if ( letter.toLowerCase().charCodeAt(0) < 97 || letter.toLowerCase().charCodeAt(0) > 122) {
          return false;
      }
    }
    
    return true;
};

require('../Tests/validate.js')(validateName);
