var http = require('http');
var url = require('url');
var fs = require('fs');
const startPage = 'startPage.html'
const OKhead = {'Content-Type':'text/html'};
http.createServer(function(req, res){
    fs.readFile(startPage, function(err, data){
        if(err){
            console.log(err);
        }
        res.writeHead(200, OKhead);
        console.log(data);
        res.write(data);    
        return res.end();
    })
    
}).listen(8080);
console.log("server created.")