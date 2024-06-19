import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks , readingTime}) => {
    console.log(bookmarks);

    return (
        <div className='md:w-1/3  bg-gray-200 m-9 p-4'>

            <h4 className="text-2xl text-center">Total Reading Time: {readingTime} min</h4>

            <h2 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;