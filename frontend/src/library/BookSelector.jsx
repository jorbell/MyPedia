import {mdiPlus} from '@mdi/js'
import Icon from '@mdi/react'
import '../styles/BookSelector.css'
import { Link } from 'react-router-dom';
import {useAddBook} from '../hooks/useApi'
const BookSelector = ({currentBook, books}) => {
  const addBookMutation = useAddBook();
  const handleAddBook = (name) => { addBookMutation.mutate(name); };
  if(books)
  return (
    <div className="book-selector">
      <div className="books">
        {books.map(book => 
          <Link
            key={book.id}
            to={`../${book.name}`}
            className={`book-link ${book === currentBook ? 'active' : ''}`}
          >
            {book.name}
          </Link>

        )}
      </div>
      <div className="addBook" onClick={handleAddBook}>
        <p>Add a book</p>
        <Icon path={mdiPlus} color="white" size={1} />
      </div>
    </div>
  )
} 
export default BookSelector
