var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    fs.readFile('game.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
        console.log("game initialized.")
    });
}).listen(8080);
console.log("server created.")