import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
     }, []);

    return (
        <div className='md:w-2/3'>
            <h2>Blogs Section</h2>

            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;
