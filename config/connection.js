
var mysql =require('mysql');
require("dotenv").config(); 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Newlife7',
    port:3306,
    database:"burgers_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connection at port'+ connection.threadId)

});


module.exports = connection;