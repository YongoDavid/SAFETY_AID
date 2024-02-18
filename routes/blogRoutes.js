const express = require('express');
const blogController  = require('../controller/blogsController');
const router = express.Router();


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
router.get('/add-blog' , blogController.New_blog_get);
router.post('/add-blog-create' , blogController.New_blog_post );
router.get('/single-blog', blogController.Find_singleBlog);
router.get('/blogs', blogController.All_Blogs );

module.exports = router