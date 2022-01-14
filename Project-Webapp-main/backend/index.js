const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
 }));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "carsystem"
})

app.get('/carsparking', (req, res) => {
    db.query("SELECT * FROM carsparking", (err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result);
        }
    })
});

app.post('/create', (req, res) => {
    let email = req.body.email;
    let fullname = req.body.fullname;
    let telephone = req.body.telephone;
    let carType = req.body.carType;
    //let booking_status = req.booking_status;

    db.query("INSERT INTO carsparking (email, fullname, telephone, type) VALUES(?,?,?,?)", 
    [email, fullname, telephone, carType],
    (err, result) => {
        if(err){
            console.log(err)
        } else{
            /*res.send([
                'Signup completed',
                `Email: ${email}`,
                `FullName: ${fullname}`,
                `Telephone: ${telephone}`,
                `Car type: ${carType}`
            ].join('<br>'));*/
            res.redirect("http://127.0.0.1:5501/parking.html")
        }
    });
});

app.put('/api/users/update', (req, res) => {
    let id = req.body.id;
    let carType = req.body.carType;

    db.query("UPDATE carsparking SET type = ? WHERE id = ?", [carType, id]
    ,(err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result);
        }
    });
});

app.delete('/api/users/delete/:id', (req, res) => {
    let id = req.params.id;
    let carType = req.body.carType;

    db.query("DELETE FROM carsparking WHERE id = ?", id
    ,(err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result);
        }
    });
});

app.listen('5500', () => {
    console.log("Server is running on port 5500");
})