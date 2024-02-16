const Blog = require('../model/blog')


const New_blog = (req,res)=>{
    const blog = new Blog(req.body)

    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
};
const Find_allBlogs =  (req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
};
const Find_singleBlog = (req,res)=>{
    Blog.findById()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
};
const All_Blogs = (req,res)=>{
    Blog.find().sort({createAt : -1})
        .then((result)=>{
            res.render('index' , {title : 'All Blog' , blogs: result})
        })
        .catch((err)=>{
            console.log(err)
        })
};


module.exports = {
    New_blog,
    Find_allBlogs,
    Find_singleBlog,
    All_Blogs
}