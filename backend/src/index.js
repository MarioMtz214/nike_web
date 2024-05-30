const express = require('express');
const cors = require('cors');
const app = express(); 

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "nikedb",
});

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/product', (req, res) => {
    db.query('SELECT * FROM product', (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/product/:id', (req, res) => {
    db.query('SELECT * FROM product WHERE id = ?', [req.params.id], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/product', (req, res) => {
    db.query('INSERT INTO product (reference, name, description, category, price, sale, img) VALUES (?, ?, ?, ?, ?, ?, ?)', [req.body.reference, req.body.name, req.body.description, req.body.category, req.body.price, req.body.sale, req.body.img], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send('Values Inserted')
        }
    })
})

app.put('/product/:id', (req, res) => {
    db.query('UPDATE product SET name = ?, description = ?, category = ?, price = ?, sale = ?, img = ? WHERE id = ?',  [req.body.reference, req.body.name, req.body.description, req.category.name, req.body.price, req.body.sale, req.body.img], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send('Values Updated')
        }
    })
})




app.listen(3000, console.log(`Server running on port ${ 3000 }`))
