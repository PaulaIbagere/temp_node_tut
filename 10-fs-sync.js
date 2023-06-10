//syncronous file system
//destructuring methods out of the fs module
const {readFileSync, writeFileSync} = require('fs')

console.log("Start");
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);
/* 
to create a new file
the first argument is the file path
the second is the content of the file
the third is the option object eg append
*/
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});

console.log("Done with this task");
console.log("Starting the next task");

