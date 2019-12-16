const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'beapineapple',
    database : 'header'
});

module.exports = connection