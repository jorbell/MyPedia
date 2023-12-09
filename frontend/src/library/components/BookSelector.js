import { Link, useParams } from 'react-router-dom'

const BookSelector = ({books,addBook}) => {
  const params = useParams()
  if(books)
  return (
    <div className="book-selector">
      {books.map(book => 
        <div key={book.name} className="book-selector-link">
          <Link 
            to={`../library/${book.name}`}
            key={book.name}
            className={book.name===params.book?"active":"inactive"}
            > 
            {book.name}
          </Link>
        </div>
      )}
      <button className="addBook" onClick={addBook}>+</button>
    </div>
  )
} 
export default BookSelector
