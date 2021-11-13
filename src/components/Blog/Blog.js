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
                
                <h1 className="text-start"><span className="color-2">EXECUTIVE</span> <span className="color-1">TEAM </span></h1>
                {/* <h5 className="text-center fw-bolder color-2">we explane all time new</h5> */}
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