const express = require('express');
const router = express.Router();
const db = require('../config/db');
const cartRouter = require('./cart');

router.use('/cart', cartRouter);

// Route to get all products
router.get('/products', (req,res) => {
    let sql = 'SELECT * FROM products';
    let query = db.query(sql, (err, results) => {
        if(err) {
            console.log('Failed fetch products...');
        }
        console.log(results);
        res.json(results);
    });
});


// Route to get one product
router.get("/getFromId/:id", (req,res)=>{
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    console.log(sql);
    let query = db.query(sql, (err, result) => {
        if(err) {
            console.log('Failed fetch product...');
        }
        console.log(result);
        res.json(result);
    });
});

// Route for creating the product
router.post('/create', (req,res)=> {
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
    let sql = 'INSERT INTO products (title, post_text, user_name) VALUES (?,?,?)'
    let query = db.query(sql,[title,text,username], (err,result)=>{
       if(err) {
           console.log('Failed to create products...');
       }
       console.log(result);
       res.json(result);
    });
});

// Route for creating test product
router.get('/create1', (req,res)=> {
    let product = ['Couch', 'Leather', 819.99];
    let sql = 'INSERT INTO products (Product_Name, Description, Price) VALUES (?,?,?)';
    db.query(sql,product, (err,result)=>{
       if(err) {
           console.log('Failed to create test product...');
       }
       console.log(result);
       res.json(result);
    });
});

// Route to like a post
router.post('/like/:id',(req,res)=>{
    const id = req.params.id;
    let sql = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
    db.query(sql,id, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

    // Route to delete a post

router.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    let sql = 'DELETE FROM posts WHERE id= ?';
    db.query(sql, id, (err,result) => {
        if(err) throw err;
    });
    console.log(result);
    res.json(result);
});


module.exports = router;