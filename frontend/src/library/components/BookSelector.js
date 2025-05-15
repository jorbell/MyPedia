import {mdiPlus} from '@mdi/js'
import Icon from '@mdi/react'
import BookLink from './BookLink'
import '../styles/BookSelector.css'

const BookSelector = ({books,addBook}) => {
  if(books)
  return (
    <div className="book-selector">
      <div className="books">
        {books.map(book => 
          <BookLink key ={`${book.name}.${book.id}`} name={book.name} />
        )}
      </div>
      <div className="addBook" onClick={addBook}>
        <p>Add a book</p>
        <Icon path={mdiPlus} color="white" size={1} />
      </div>
    </div>
  )
} 
export default BookSelector
