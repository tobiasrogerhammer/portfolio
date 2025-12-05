const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql');
const { response } = require('express');
const port = 3000;

app.use(cors())



const db = mysql.createConnection({
    host: 'localhost',
    port: '8889' ,
    user: 'root',
    password: 'root',
    database: 'Dromtorp'
})
db.connect(err => {
        if (err) {
        throw err;
    } else {
        console.log('Connection created.')
    }
  
})



app.get('/tobias', (req, res) => {
  let sql = ' SELECT * FROM Elever '
  let query = db.query(sql, err => {
      if (err) {
        throw err;
    }
    let response = {
        "Database": "Connected"
    }
      res.json(response)
  })
})

app.get('/getTable', (req, res) => {
    let sql = 'SELECT * FROM Elever';
    db.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
