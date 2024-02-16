const express = require('express')
const router = express.Router()
const blogController  = require('../controller/blogsController')


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

router.post('/add-blog' , blogController.New_blog )
router.get('/all-blogs', blogController.Find_allBlogs)
router.get('/single-blog', blogController.Find_singleBlog)
router.get('/blogs', blogController.All_Blogs )
module.exports = router