const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to get all products in cart
router.get('/', (req,res) => {
    let sql = 'SELECT * FROM cart';
    let query = db.query(sql, (err, results) => {
        if(err) {
            console.log('Failed fetch products...');
        }
        console.log(results);
        res.json(results);
    });
});

router.post('/', (req,res)=> {

    let sql1 = `SELECT * FROM products WHERE id = ${req.params.id}`;
    console.log(sql);
    let query = db.query(sql1, (err, result) => {
        if(err) {
            console.log('Failed fetch product...');
        }
        console.log(result);
        res.json(result);
    });
    /*
    let sql2 = 'INSERT INTO cart (Product_Name, Description, Price) VALUES (?,?,?)';
    db.query(sql2,product, (err,result)=>{
       if(err) {
           console.log('Failed to create test product...');
       }
       console.log(result);
       res.json(result);
    });*/
});

module.exports = router