const http = require("http");
let url = require("url");
let static = require("node-static");
let file = new static.Server(".", { cache: 0 });
function accept(req, res) {
  if (req.url == "/setVote") {
    res.writeHead(200);
    res.end("Your vote is accepted: " + new Date().toLocaleString());
    file.serve(req, res);
  } else if (req.url == "/book.json") {
    file.serve(req, res);
  } else {
    file.serve(req, res);
  }
}
// ------ run server -------
http.createServer(accept).listen(8080);
console.log("Server running on port 8080");
