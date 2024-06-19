import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    console.log(blog);
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='pt-10'>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mr-10'>
                    <span className='p-2'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl'><BsBookmarks /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className="bg-blue-500 text-white p-2 rounded">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;
