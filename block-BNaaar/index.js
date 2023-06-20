var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.write("welcomw to thw index page.");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("content-type" , 'tetx/html') ;
    res.end('<h2>this is all about NodeJS</h2>');
  }
}

server.listen(3000, () => {
    console.log("Server listening on port of 3000");
  });
