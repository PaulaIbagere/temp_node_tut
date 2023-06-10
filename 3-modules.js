//commonJs, every file is module (by default)
//MODULES - Encapsulated code (only share minimum)

//now we have access to the names
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// console.log(sayHi);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);