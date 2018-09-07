
var mysql =require('mysql');
require("dotenv").config(); 

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port:3306,
    database:"ttnuv4yywlafczk6"
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connection at port'+ connection.threadId)

});


module.exports = connection;