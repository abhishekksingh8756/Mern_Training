const fruits = require('./fruits.js');

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
