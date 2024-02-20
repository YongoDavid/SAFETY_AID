const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./model/blogs');
const dbURI = 'mongodb+srv://nodeninja:nodeninja12345@cluster0.zs6k5gt.mongodb.net/'
mongoose.connect(dbURI)
    .then((result)=>{app.listen(5000)})
    .catch((err)=>{console.log(err)});
app.use(morgan('dev'));
app.set('view engine' , 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.use((req,res , next)=>{
    console.log('server just started')
    next()
})

app.get('/' , (req,res)=>{
    res.redirect('/blogs')
});
app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index' , {blogs: result})
    })
    .catch((err)=>{
        console.log(err)
    })
});
app.get('/create' , (req,res)=>{
    res.render('create')
});
app.post('/blogs' , (req,res)=>{
    const newschema = Blog(req.body)

    newschema.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((err)=>{
            console.log(err)
        });
});
app.get('/about', (req,res)=>{
    res.sendFile('about.html' , {root: __dirname})
});
app.use((req,res)=>{
    res.status(404).sendFile('404.html' , {root: __dirname})
})

// NEXT THING TO DO IT TO GET A SINGLE BLOG BY ID USING ROUTE PARAMETER
