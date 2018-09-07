
var mysql =require('mysql');
require("dotenv").config(); 

var connection = mysql.createConnection({
    host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "b98hapm8gwcuedwj",
    password: "kqda1nonnrvqk57v",
    port:3306,
    database:"dxvqgt41vyj5eigy"
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connection at port'+ connection.threadId)

});


module.exports = connection;