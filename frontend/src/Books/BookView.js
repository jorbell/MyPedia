import Book from './components/Book'
import booksService from './services/books'
import { Link, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './book.css'

const BookSelector = ({books, handleBookChange,handleAddBook}) => {
  const params = useParams()
  if(books)
  return (
      <div className="book-selector">
          <div className="book-selector-link">
            {books.map(book => {
              return (
              <Link to={`../books/${book.name}`}
                key={book.name}
                className={book.name===params.book?"active":"inactive"}
                onClick={() => handleBookChange(book)} > 
                {book.name}
              </Link>
              )
            }
            )}
            <button className="addBook" onClick={handleAddBook}>+</button>
          </div>
        </div>
  )
}
const BookView = () => {
  let initChapter = { "name": "", "content": "" }
  let initBook = { "name": "init", "chapters":[initChapter] }

  //State hooks
  const [currentBook, setCurrentBook] = useState(undefined)
  const [currentChapter, setCurrentChapter] = useState(initChapter);
  const [books, setBooks] = useState([initBook])

  const params = useParams()
  //Initialize books
  useEffect(() => {
    booksService
      .getAll()
      .then(initialBooks => { 
        setBooks(initialBooks) 
        if (params.book !== undefined){
          let newBook = (initialBooks.find(book => book.name === params.book))
          setCurrentBook(newBook)
          setCurrentChapter(newBook.chapters[0])
        }
      })
  }, [params])

  //Event handlers
  const handleBookChange = (book) => {
    setCurrentBook(book)
    if (book.chapters.length > 0) {
      setCurrentChapter(book.chapters[0])
    }
  }
  const handleSave = (chap) => {
    booksService
      .update(chap.id, chap.content , chap.name)
      .then( response => {
        setBooks(response)
        let newCurrentBook = response.find(book => book.id === currentBook.id)
        setCurrentBook(newCurrentBook)

        let newChapter = newCurrentBook.chapters.find(chapter => chapter.id === chap.id)
        setCurrentChapter(newChapter)
      })
  }


  const addChapter = () => {
    console.log("Chapter added")
    const name = prompt("Chapter name:", "...")
    if(name){
      booksService
        .createChapter(currentBook.id, name)
        .then((response) => {
          setBooks(response)
      })
    }
  }
  const addBook = () => {
    const name = prompt("Bookname:", "...")
    if(name){
      booksService
        .createBook(name)
        .then((response) => {
          setBooks(response)
        })
    }
  }

  return (
    <div>
        <BookSelector 
          books={books}
          handleBookChange={handleBookChange} 
          handleAddBook={addBook}
          className="book-selector"
        />
        <Book
          currentBook={currentBook}
          currentChapter={currentChapter}
          setCurrentChapter={setCurrentChapter}
          handleSave={handleSave}
          addChapter={addChapter}
        />
    </div>
  )

}
export default BookView
