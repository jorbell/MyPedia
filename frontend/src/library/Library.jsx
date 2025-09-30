import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Book from '../library/Book'
import BookSelector from '../library/BookSelector'

import {useBooks} from '../hooks/useApi'

const Library = () => {

  //Getting the books from server.
  const {data: books = [], isLoading } = useBooks();

  //Setting the current book by the name in URL.
  const {book: bookName } = useParams();
  const currentBook = books.find(b => b.name === bookName);

  useEffect(() => {
    document.title = "Library";
    if (bookName) {
      document.title = bookName;
    } 
  }, [bookName]);

  if (isLoading) { return <div>Loading...</div>; }
  return (
    <div className="LibraryApp">
      <BookSelector currentBook={currentBook} books={books} />
      <Book currentBook={currentBook} />
    </div>
  );
};

export default Library;
