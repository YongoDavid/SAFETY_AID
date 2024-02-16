const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./model/blog')
const blogRoutes = require('./routes/blogRoutes')

// come back to check the @SAFETY-AID  connection to database
const dbURL = 'mongodb+srv://SAFETY-AID:SAFETY-AID@SAFETY-AID.zs6k5gt.mongodb.net/'
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
app.use(express.static('public'))    
app.use((req,res , next)=>{
    console.log('Server started')
    next();
})

// Routes
app.use(blogRoutes);
// ROUTES 
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})
app.get('/about', (req,res)=>{
    res.sendFile('about.html' , {root: __dirname})
})
// blog routes 
app.get('/create-post', (req,res)=>{
    res.render('create' , {title: 'New post'})
})
app.use((req,res)=>{
    res.status(404).sendFile('404.html' , {root: __dirname})
})
