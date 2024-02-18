const Blog = require('../model/blogs')

const All_Blogs = (req,res)=>{
    Blog.find().sort({createAt : -1})
        .then((result)=>{
            res.render('index' , {title : 'All Blog' , blogs: result})
        })
        .catch((err)=>{
            console.log(err)
        })
};

const Find_singleBlog = (req,res)=>{
    const id = req.params.id
    Blog.findById(id)
        .then((result)=>{
            res.render('detials' , { blog: result ,  title : 'Blog info' })
        })
        .catch((err)=>{
            res.status(404).sendFile('404.html' , {root: __dirname})
        })
};

const New_blog_get = (req,res)=>{
    res.render('create' , {title: 'Create a new blog'})
};

// figure out why data isnt sending 
const New_blog_post = (req,res)=>{
    const blog = new Blog(req.body);

    console.log(blog)
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
};

module.exports = {
    New_blog_get,
    New_blog_post,
    Find_singleBlog,
    All_Blogs
}