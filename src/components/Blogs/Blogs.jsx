import React, { useState, useEffect } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => setBlogs(data))
    }, []);

    return (
        <div className='md:w-2/3'>
            <h2>Blogs Section</h2>
        </div>
    );
};

export default Blogs;
