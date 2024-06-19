import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    console.log('readingTime');
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <div className="md:flex max-w-5xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
        <Bookmarks  bookmarks={bookmarks} readingTime={readingTime}/>
      </div>
    </div>
  )
}

export default App
