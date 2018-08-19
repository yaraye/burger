CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers(
id INTEGER(100) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,


PRIMARY KEY (id)

);


SELECT * FROM burgers_db.burgers;