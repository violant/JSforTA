//Task 11-1

const http = require('http');
const os = require('os');
const path = require('path');

let httpPort = 5000;
http.createServer(function(request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  let userLogin = os.userInfo().username;
  let osType = os.type();
  let upTime = Math.floor(os.uptime / 60);
  let currentWorkDir = __dirname;
  let serverFileName = path.basename(__filename);

  let systemInfoText = `
  System Information\n
  Current user name: ${userLogin} \n 
  OS type: ${osType} \n
  System work time: ${upTime} minutes\n 
  Current work directory: ${currentWorkDir} \n 
  Server file name: ${serverFileName}`;

  response.end(systemInfoText);
}).listen(httpPort);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${httpPort}/`);