import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Book from '../library/Book'
import BookSelector from '../library/BookSelector'
import Notification from '../components/Notification'

import { useBooks } from '../hooks/useApi'

const Library = () => {
  //Getting the books from server.
  const { data: books = [], isLoading } = useBooks()

  //Setting the current book by the name in URL.
  const { book: bookName } = useParams()
  const currentBook = books.find((b) => b.name === bookName)
  const [notification, setNotification] = useState(false)

  //If loading, return just loading text.
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <BookSelector
        currentBook={currentBook}
        books={books}
        setNotification={setNotification}
      />
      <Book currentBook={currentBook} setNotification={setNotification} />
      <Notification notification={notification} />
    </div>
  )
}

export default Library
