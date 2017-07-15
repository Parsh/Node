const req = require('request')
const yargs = require('yargs')

var args = yargs.argv;

var response;
req({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(args.address)}`,
  json: true
}, function(error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  response = body
  console.log(typeof response)
  console.log(JSON.stringify(response, undefined, 2))
});
