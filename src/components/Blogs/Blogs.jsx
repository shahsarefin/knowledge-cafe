import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead}) => {
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
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;
