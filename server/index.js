const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/products');

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
/*
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
*/

//Default Form
app.get('', (req, res) => {

    res.send('Default...')

});

//Product routes
app.use('/', productRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})