import {mdiPlus, mdiPlusBox} from '@mdi/js'
import Icon from '@mdi/react'
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
      <div className="books">
        {books.map(book => 
          <BookLink key ={`${book.name}.${book.id}`} name={book.name} params={params}/>
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
