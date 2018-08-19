var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var router = require('./controllers/burgers_controllers.js');

var PORT = process.env.PORT || 7009;



app.use(express.static(__dirname + '/public'));
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

// create application/json parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
 
app.use(methodOverride('_method'))

app.use(router); 

app.listen(PORT,function(){

    console.log("Server listening on: http://localhost:" + PORT);
});