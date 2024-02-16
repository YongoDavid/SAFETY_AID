const express = require('express')
const router = express.Router()
const Blog = require('../model/blog')

// app.get('/add-blog' ,(req,res)=>{
//     const blog = new Blog ({
//         title : 'Driver update',
//         snippet: 'Unffriendly',
//         body: 'The driver was not friendly at all but the ride was good'
//     })
//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// })

router.post('/add-blog' , (req,res)=>{
    const blog = new Blog(req.body)

    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
});
router.get('/all-blogs', (req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
});
router.get('/single-blog',(req,res)=>{
    Blog.findById()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
});
router.get('/blogs', (req,res)=>{
    Blog.find().sort({createAt : -1})
        .then((result)=>{
            res.render('index' , {title : 'All Blog' , blogs: result})
        })
        .catch((err)=>{
            console.log(err)
        })
});

module.exports = router