import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    console.log('added to bookmark', blog);
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <div className="md:flex max-w-5xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks />
      </div>
    </div>
  )
}

export default App
