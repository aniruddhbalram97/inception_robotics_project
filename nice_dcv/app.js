var http = require('http');
var https = require('https');
const process = require('process'); 
var fs = require('fs');
var path = require('path');


var httpsOptions = {
    key: fs.readFileSync('./conf/key.pem'),
    cert: fs.readFileSync('./conf/cert.pem')
};

var app = function (request, response) {
    if (request.url.startsWith("/public/")) {
        fs.readFile(path.join(__dirname, path.normalize(request.url)), function (err,data) {
          if (err) {
            response.writeHead(404);
            response.end(JSON.stringify(err));            
            return;
          }
        response.writeHead(200);
        response.end(data);
      });
      return;
    }
    if (request.url === "/") {
        fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                response.writeHead(404);
                response.write('Page is not found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(pgResp);
            }
            response.end();
        });
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Default Content</h1>');
        response.end();
    }
}

http.createServer(app).listen(8888);
https.createServer(httpsOptions, app).listen(4433);