const express = require('express');
const app = express();
var path = require('path')
const port = 8080

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(port, ()=> console.log('-----------------\n'+'listening at port'+ port));
