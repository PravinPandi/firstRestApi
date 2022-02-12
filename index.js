const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

require('dotenv/config')

const postsRoute = require('./routes/posts.js')
app.use('/posts', postsRoute);


app.get('/', (req, res) => {
    res.send('we are on home');
})

mongoose.connect(process.env.DB_CONNECTION , ()=>{
    console.log('connected to MongoDB')
})


app.listen(5000, () =>{
    console.log('hii from express');
});