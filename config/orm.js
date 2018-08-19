var connection= require ('./connection');

var orm = {

    all: function (tableInput, cb){     

    connection.query('SELECT * FROM '+tableInput +';', function (err, result) {
        if (err) throw err;
        cb(result);
    })
},
create: function (tableInput,burger_name, cb){     

    connection.query("INSERT INTO burgers SET ?",
    {
        
      burger_name: burger_name,
      devoured: false

    }, function (err, result)
     {
        if (err) throw err;

        cb(result);
    })
},

update: function(tableInput, condition, cb){
    connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
    if(err)throw err;
    cb(result);
    })
  }

}


module.exports = orm;

