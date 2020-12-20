const http = require('http');
const os = require('os');
const greeting = require('./personalmodule');

let httpPort = 5000;
http.createServer(function(request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  let userLogin = os.userInfo().username;
  response.end(greeting.greetings(userLogin));
}).listen(httpPort);