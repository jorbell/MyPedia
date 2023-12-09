import Book from './components/Book'
import booksService from './services/books'
import chapterService from './services/chapter'
import BookSelector from './components/BookSelector'
import { Link, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './book.css'

const Library = () => {
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
      chapterService
        .create(currentBook.id, name)
        .then((response) => {
          setBooks(response)
          setCurrentBook(response.find(book => book.id === currentBook.id))
      })
    }
  }
  const addBook = () => {
    const name = prompt("Bookname:", "...")
    if(name){
      booksService
        .create(name)
        .then((response) => {
          setBooks(response)
        })
    }
  }
  return (
    <div>
        <BookSelector 
          books={books}
          addBook={addBook}
        />
        <Book
          currentBook={currentBook}
          currentChapter={currentChapter}
          addChapter={addChapter}
          setCurrentChapter={setCurrentChapter}
          handleSave={handleSave}
        />
    </div>
  )

}
export default Library
