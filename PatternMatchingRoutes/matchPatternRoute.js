var express = require('express')
var app = express()

app.get('/:id([0-9]{5})', function(req, res){
    res.send('id:'+ req.params.id);
});

app.get('*', function(req, res){
    res.send('invalid ID');
})

app.listen(8080, function(){
    console.log("listening!")
});