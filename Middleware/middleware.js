var express = require('express')
var app = express()
var calls= 0; 
app.use('/', function(req, res, next){
    console.log("A request for things received at"+ Date.now());
    calls+=1;
    console.log(calls);
    next();
})

app.get('/', function(req, res){
    res.send(Date.now().toString());
});

app.listen(8080, ()=> console.log("I am listening"));