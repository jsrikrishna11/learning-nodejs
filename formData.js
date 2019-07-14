var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var mongoose = require('mongoose');

var upload = multer();
var app = express();
mongoose.connect('mongodb://localhost/my_db', {useNewUrlParser: true});

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

//initializing all server side systems
app.set('view engine', 'pug');
app.set('views', __dirname+"\\MarkUp");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array());
app.use(express.static('public'));

//writing request handlers

app.get('/person', function(req, res){
    res.render('person');
});

app.post('/person', function(req, res){
    var personInfo = req.body;
    if(!personInfo.name || !personInfo.age || !personInfo.nationality ||  personInfo.nationality.localeCompare("None") ){
        res.render('show_message', {
            message: "Sorry, you provided wrong info", type:"error"
        });
    }
    else{
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality : personInfo.nationality
        });
        newPerson.save(function(err, Person){
            if(err){
                res.render('show_message', {message:err, type: "error"});
            }
            else{
                res.render('show_message', {
                    message : "new person added", type: "success", person: personInfo
                });
            }
        })
    }
});
 app.get('/people', function(req, res){
    Person.find(function(err, response){
        res.json(response);
    });
 });

app.listen(8080, ()=> console.log("Started."));