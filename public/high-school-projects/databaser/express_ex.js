
const express = require('express')
const app = express()
const port = 3000


app.get('/tobias', (req, res) => {

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Dromtorp'
    })
    db.connect(err => {
    
            if (err) {
            throw err;
        } else {
            return console.log('Connection created.')
        }
     
    })
     
}




app.get('/tobias', (req, res) => {

//vi vil at serveren skal respondere med databaseinformasjon.

  
  res.send('Hello Alexander!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
