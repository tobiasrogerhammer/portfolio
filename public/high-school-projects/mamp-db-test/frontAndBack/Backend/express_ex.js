const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const con = require('./connectDatabase.js');

app.use(cors())

app.get('/selectall/:fornavn', (req, res) => {
  
  con.query("select * from elev", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

});

app.get('/updaterow/:fornavn', (req, res) => {

  var elevid = req.params.fornavn;
  var sql = "UPDATE elev set hobby = 'Håndball' WHERE ElevID="+elevid;
  
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

});

app.get('/deleterow/:fornavn', (req, res) => {

  var elevid = req.params.fornavn;
  var sql = "DELETE FROM elev WHERE ElevID="+elevid;

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

});

app.get('/insertrow/:elevid/:fornavn/:etternavn/:programfag/:hobby/:kjonn/:datamaskin', (req, res) => {

  var elevid = req.params;
  console.log(elevid);

  con.query('select * from elev', function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})