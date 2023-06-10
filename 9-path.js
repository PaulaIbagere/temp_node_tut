const path = require('path');

//to return a platform specific seperator
console.log(path.sep);

//to normalize joined path
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

// to access the basename(last portion)
const base = path.basename(filePath);
console.log(base);

//to return an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);