console.log('app starts');

const fs = require('fs');
const os = require('os');
const _ = require('lodash') //helps in sorting, filtering and type checking and lots more, check it's documentation for more

// var user = os.userInfo();
// fs.appendFile('greet.txt', `Hello ${user.username}`, function(err) {
//   if (err) {
//     console.log('An error occured!')
//   }
// });

console.log(_.uniq([1, 2, 2, 2, 4, 5, 5, 3, 8]))
console.log(_.isString('Hey'))
