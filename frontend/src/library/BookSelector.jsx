import { mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import '../styles/BookSelector.css'
import { Link } from 'react-router-dom';
import { useAddBook } from '../hooks/useApi'
import AddBookForm from '../components/AddBookForm';
import { useEffect, useState } from 'react';

const BookLink = ({book, currentBook}) => {
  const className=`book-link ${book === currentBook ? 'active' : ''}`;

  return(
    <Link
      key={book.id}
      to={`../${book.name}`}
      className={className}
    >
      {book.name}
    </Link>
  )

}
const BookSelector = ({currentBook, books, setNotification}) => {
  const [adding, setAdding] = useState(true);
  const addBookMutation = useAddBook(setNotification);
  const handleAddBook = () => { 
    setAdding(!adding);
    console.log("Button clicked!");
  };
  const addBook = (name) => {
    addBookMutation.mutate(name); 
    setAdding(!adding);
  };

  useEffect(() => {
    console.log("Use effect!");
  }, [adding]);
  if(books)
    return (
      <div className="book-selector">
        <div className="books">
          {books.map(book => 
            <BookLink key={book.id} book={book} currentBook={currentBook} />
          )}
        </div>
      {
        adding ?
        <div className="addBook" onClick={handleAddBook}>
          <p>Add a book</p>
          <Icon path={mdiPlus} color="white" size={1} />
        </div> :
        <div className="add-book-form">
           <AddBookForm addBook={addBook}/> 
        </div>
      }
    </div>
  )
} 
export default BookSelector
