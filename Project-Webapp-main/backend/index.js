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
    const FLOOR = 1;
    const LOT_NO = 8;
    let parkinglot_obj = {}
    for (let i = 0; i < FLOOR; i++) 
        for (let j = 0; j < LOT_NO; j++)
            parkinglot_obj[`P${j+1}F${i+1}`] = {
                "available": true,
                "cartype": null,
                "time": null,
                "taken":null
            };

    
    db.query("SELECT * FROM carsparking WHERE created_at > CURRENT_TIMESTAMP() - 900", (err, result) => {
        if(err){
            console.log(err)
        } else{
            // res.send(result);
            for (let i = 0; i < result.length; i++) {
                parkinglot_obj[result[i].parkinglot] = {
                    "available":(result[i].active?  false : true),
                    "cartype":(result[i].active? result[i].type : null),
                    "time":(result[i].active? result[i].created_at : null),
                    "taken":(result[i].active? result[i].taken : null)
                };
            }
            let parkinglot_arr = [];
            for (let key in parkinglot_obj) {
                let val = parkinglot_obj[key];
                val.parkinglot = key;               
                parkinglot_arr.push(val);
            }
            res.send(parkinglot_arr);
        }
    })
});

app.post('/create', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let telephone = req.body.telephone;
    let cartype = req.body.cartype;
    let parkinglot = req.body.parkinglot;
    let active = '1';
    //let booking_status = req.booking_status;
    if (name == "" || email == "" || telephone == "" || cartype == "") {
        res.send({
            status: 'incompleted',
            message: 'You have some fields unfilled.',
        });
    }
    db.query("INSERT INTO carsparking (fullName, email,  telephone, type, parkinglot, active) VALUES(?,?,?,?,?,?)", 
    [name,email,  telephone, cartype, parkinglot, active],
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
            // res.redirect("http://127.0.0.1:5501/parking.html")
            res.send({
                status: 'completed',
                message: 'Your booking completed.',
                id: result.insertId,
            });
        }
    });

    // console.log(name);
    // console.log(name);
    // console.log(name);
    // console.log(name);
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

app.put('/freeparkinglot', (req, res) => {
    
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

app.get('/cancel/:id', (req, res) => {
    let id = req.params.id;

    db.query("UPDATE carsparking SET active = 0  WHERE id = ?", id
    ,(err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result);
        }
    });
});

app.get('/reserveconfirm/:id', (req, res) => {
    let id = req.params.id;

    db.query("UPDATE carsparking SET taken = 1  WHERE id = ?", id
    ,(err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result);
        }
    });

});