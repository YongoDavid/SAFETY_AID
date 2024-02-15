const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
app.listen = 3000
app.use(morgan('dev'));
app.set('view engine' , 'ejs');
// come back to check the @SAFETY-AID  connection to database
const dbURL = 'mongodb+srv://SAFETY-AID:SAFETY-AID@SAFETY-AID.zs6k5gt.mongodb.net/'
mongoose.connect(dbURL)

// Normal Routes
app.get('/' ,(req,res)=>{
    res.render('blogs')
})
app.get('/about',(req,res)=>{
    res.sendFile('about.html')
})