
    var orm = require('../config/orm.js');

    var burgers={
        all: function(cb){

            orm.all("lvgrprz89qntq881", function(res){
                cb(res);
            })
        },

        update: function (id,cb) {
            orm.update("lvgrprz89qntq881",id,cb);

            },

        create: function (tableInput,burger_name, cb){    

            orm.create(tableInput, burger_name, function(res){
                cb(res);

            })
    
            }
    };

    module.exports = burgers;

