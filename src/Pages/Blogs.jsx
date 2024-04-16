import React, { useEffect, useState } from 'react';
import image from '../assets/shutterstock_1495957673.png'
import Blog from '../components/Blog';
import { Helmet } from 'react-helmet-async';
const Blogs = () => {
     const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    console.log(blogs);

    return (
        <div className='pt-12 mx-auto'>
                 <Helmet>
              <title>Dream Dwellings | Blogs</title>  
            </Helmet>
 <div className='pb-4'>
                <img src={image} alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>
        </div>
    );
};

export default Blogs;