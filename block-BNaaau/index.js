var http = require("http");
var fs = require("fs");

var server = http.createserver(handleServer);
function handleServer(res, req) {
  console.log(res, req);
}

server.listen(5000, () => {
  console.log("server is listening to port 5000");
});

var nodeServer = http.createserver(handleNodeServer);
function handleNodeServer(res, req) {
  console.log(res, req);
  console.log(res.headers);
  res.setHeader("content-type", "text/html");
  res.end("My first server in NodeJS");
}

nodeServer.listen(5100, () => {
  console.log("server is listening to port 5100");
});

var nodeServer1 = http.createserver(handleNodeServer1);
function handleNodeServer1(res, req) {
  console.log(req.url, req.method);
  res.setHeader("content-type", "text/html");
  res.end("My first server in NodeJS");
}

nodeServer.listen(5556, () => {
  console.log("server is listening to port 5556");
});
var nodeServer2 = http.createserver(handleNodeServer2);
function handleNodeServer2(res, req) {
  console.log(req.url, req.method);
  res.statusCode(202);
  res.setHeader("content-type", "text/html");
  res.end(req.headers);
}

nodeServer.listen(3333, () => {
  console.log("server is listening to port 3333");
});

var nodeServer3 = http.createserver(handleNodeServer3);
function handleNodeServer3(res, req) {
  res.statusCode(202);
  res.setHeader("content-type", "text/html");
  res.end(`<h3>Welcome to altcampus</h3>`);
}

nodeServer.listen(8000, () => {
  console.log("server is listening to port 8000");
});

var nodeServer4 = http.createserver(handleNodeServer4);
function handleNodeServer4(res, req) {
  res.statusCode(202);
  res.setHeader("content-type", "application/json");
  res.end({ success: true, message: "Welcome to Nodejs" });
}

nodeServer.listen(8888, () => {
  console.log("server is listening to port 8888");
});