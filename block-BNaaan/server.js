var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers, req.method, req.url);
  res.end("Welcome!");
}

server.listen(3000, () => {
  console.log("Server listening on port of 3000");
});