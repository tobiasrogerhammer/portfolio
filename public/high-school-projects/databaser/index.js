#Oppgave_12
'''js
const express = require('express');
const mysql = require('mysql');
 
const app = express();
app.listen('3000', () => {
    console.log('Server started on port 3000')
})
 
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
 
app.get('/addElev', (req, res) => {
    let post = { Fornavn: 'Trym', Etternavn: 'Testingson', Klassetrinn: '1', Hobby: 'Basket', Programfag: 'IT', Gender: 'M', Datamaskin: '2' }
    let sql = 'INSERT INTO Elever SET ?'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('Elev added into table.')
    })
})
 
app.get('/removeElev', (req, res) => {
    let post = { Fornavn: 'Trym', Etternavn: 'Testingson', Klassetrinn: '1', Hobby: 'Basket', Programfag: 'IT', Gender: 'M', Datamaskin: '2' }
    let sql = 'DELETE FROM Elever WHERE Fornavn = "Trym"'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('Elev deleted from table.')
    })
})
 
app.get('/editElev', (req, res) => {
    let post = { Fornavn: 'Test', Etternavn: 'Testingson', Klassetrinn: '1', Hobby: 'Test', Programfag: 'IT', Gender: 'M', Datamaskin: '2' }
    let sql = 'UPDATE Elever SET Hobby="editedHobby" WHERE Fornavn = "Test"'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('Elev edited on table.')
    })
})
'''
