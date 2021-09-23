const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const app = express();

const  PORT = 3005;

//This allows api for cross-origin resource sharing
app.use(cors());

//This allows api parsing of json
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Connect to database
db.connect((err) => {
    if(err){
        console.log('MySQL Connection failed...');
    }
    console.log('MySQL Connected...');
})

//Default Form
app.get('', (req, res) => {

    res.send('Default...')

});

//Product routes
app.use('/', productRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})