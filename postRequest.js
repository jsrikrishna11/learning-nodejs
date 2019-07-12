const express = require('express');
const app = express();
var path = require('path');
const port = 8080;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/details', urlencodedParser, function(req, res){
    response = {
        first_name : req.body.name1,
        last_name : req.body.name2
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.listen(port, ()=> console.log('-----------------\n'+'listening at port'+ port));
