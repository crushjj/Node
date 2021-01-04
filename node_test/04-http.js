const fs  = require('fs');
const http = require('http');
const path = require('path');

http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET'){
    fs.readFile(path.resolve('./index.html'), (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  };
}).listen(3000);