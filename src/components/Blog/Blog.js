import React, { useEffect, useState } from 'react';
import './Blog.css'
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {

    const [Blogs, setBlogs] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
                    
            .then(reviews => setBlogs(reviews))
                                 
         }, [])

    return (
        <section className="my-5 " id="testimonials">
            <div className="container">
              
               
                <div className="my-5">
                <h5 className="text-center fw-bolder">Blogs</h5>
                <h1 className="text-center">Recent <span className="color-1">News</span> & <span className="color-2">Post</span></h1>
                </div>
                              
                <div className="row">
                                    
                    {
                        Blogs.map(Blog => <BlogCard Blog={Blog}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};


export default Blog;