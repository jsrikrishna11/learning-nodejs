var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/first', function(req, res){
    res.render('first_view');
});
 app.get('/dynamic', function(req, res){
    res.render('dynamic', {
        name: "First Dynamic website",
        myname : "Sri Krishna",
        url : "localhost:8080/first"
    })
 });
app.listen(8080, ()=> console.log("listening"));