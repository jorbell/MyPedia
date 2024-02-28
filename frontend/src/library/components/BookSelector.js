import { Link, useParams } from 'react-router-dom'

const BookLink = ({ name, params }) => {
  return (
    <div key={name} className="book-selector-link">
      <Link 
        to={`../library/${name}`}
        key={name}
        className={name===params.book?"active":"inactive"}
      > 
        {name}
      </Link>
    </div>
  )

}
const BookSelector = ({books,addBook}) => {
  const params = useParams()
  if(books)
  return (
    <div className="book-selector">
      {books.map(book => 
        <BookLink name={book.name} params={params}/>
      )}
      <button className="addBook" onClick={addBook}>+</button>
    </div>
  )
} 
export default BookSelector
