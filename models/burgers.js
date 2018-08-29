
    var orm = require('../config/orm.js');

    var burgers={
        all: function(cb){

            orm.all('burgers', function(res){
                cb(res);
            })
        },

        update: function (id,cb) {
            orm.update('burgers',id,cb);

            },

        create: function (tableInput,burger_name, cb){    

            orm.create(tableInput, burger_name, function(res){
                cb(res);

            })
    
            }
    };

    module.exports = burgers;

