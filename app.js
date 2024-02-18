const express = require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./model/blog')
const blogRoutes = require('./routes/blogRoutes');

// come back to check the @SAFETY-AID  connection to database
const dbURL = 'mongodb+srv://SAFETY-AID:SAFETY-AID@cluster0.zs6k5gt.mongodb.net/'
mongoose.connect(dbURL)
    .then(result => {
        app.listen(3000)
    })
    .catch(err=>{
        console.log(err)
    });

app.set('view engine' , 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));  
app.use((req,res , next)=>{
    console.log('Server started')
    next();
})

// ROUTES 
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});
app.get('/about', (req,res)=>{
    res.sendFile('about.html' , {root: __dirname})
})
app.use(blogRoutes);
// blog routes 
app.use((req,res)=>{
    res.status(404).sendFile('404.html' , {root: __dirname})
});

// there is an issue when i fill the form to write a new blog 
// it is showing my 404 page 
// nothing is being added to the database 
// try and resolve when you come back 