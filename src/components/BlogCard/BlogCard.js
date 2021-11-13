import React from "react";
import './BlogCard.css'

const BlogCard = (props) => {

    const { subTitle, Title,writer, description,photoURL } = props.Blog;
   
    return (
        <div className="mb-3 col-lg-3 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="card-body">
                    <img className="img-fluid mb-5" src={photoURL} alt="" />

                    
                    <h5 className="card-title text-start cs-color">{Title}</h5>

                    <p className="text-start">{subTitle}</p>
                   
                  
                </div>
               
            </div>
        </div>
    );
};


export default BlogCard;
