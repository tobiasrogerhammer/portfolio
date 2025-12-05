var mysql = require('mysql');

const con = mysql.createConnection({
        host: 'localhost',
        user     : 'root',
        password : 'root',
        database : 'Dromtorp',
        port: 3306
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;