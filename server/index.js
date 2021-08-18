const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const app = express();
const  PORT = 3005;

//This allows api for cross-origin resource sharing
app.use(cors());

//This allows api parsing of json
app.use(express.json())

//Connect to database
db.connect((err) => {
    if(err){
        console.log('MySQL Connection failed...');
    }
    console.log('MySQL Connected...');
})

//Create Table

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT, Product_Name VARCHAR(255), Description VARCHAR(255), Price INT, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) {
            console.log('Failed to create table...');
        }

        console.log(results);
        res.send('Table Created...')
    });
});

//Default Form
app.get('', (req, res) => {

    res.send('Default...')

});


// Route to get all products
app.get('/getproducts', (req,res) => {
    let sql = 'SELECT * FROM products';
    let query = db.query(sql, (err, results) => {
        if(err) {
            console.log('Failed fetch products...');
        }
        console.log(results);
        res.send('Products fetched...');
    });
});


// Route to get one product
app.get("/getFromId/:id", (req,res)=>{
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) {
            console.log('Failed fetch product...');
        }
        console.log(result);
        res.send('Product fetched...');
    });
});

// Route for creating the product
app.post('/create', (req,res)=> {
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
    let sql = 'INSERT INTO products (title, post_text, user_name) VALUES (?,?,?)'
    let query = db.query(sql,[title,text,username], (err,result)=>{
       if(err) {
           console.log('Failed to create products...');
       }
       console.log(result);
       res.send('Product created...')
    });
});

// Route for creating test product
app.post('/create1', (req,res)=> {
    let product = {Product_Name:'Table', Description:'Plastic kitchen table', Price: 399.99};
    let sql = 'INSERT INTO products (title, post_text, user_name) VALUES (?,?,?)'
    let query = db.query(sql,product, (err,result)=>{
       if(err) {
           console.log('Failed to create test product...');
       }
       console.log(result);
       res.send('Product created...')
    });
});

// Route to like a post
app.post('/like/:id',(req,res)=>{
    const id = req.params.id;
    let sql = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
    db.query(sql,id, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Like product fetched...');
    });
});

// Route to delete a post

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    let sql = 'DELETE FROM posts WHERE id= ?';
    db.query(sql, id, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Product Deleted ...');
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})