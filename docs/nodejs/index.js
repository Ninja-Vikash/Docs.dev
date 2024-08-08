const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello node.js!</h1>\n");
  }
  else
  if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>About us page</h1>\n");
  }
  else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page not found</h1>\n");
  }
  
});

server.listen(port, hostname, () => {
  console.log("App is running!!!");
});
