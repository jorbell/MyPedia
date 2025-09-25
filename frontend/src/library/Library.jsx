import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Book from '../library/Book'
import BookSelector from '../library/BookSelector'
import booksService from '../api/booksApi'
import chapterService from '../api/chaptersApi'
import { bookContext } from '../Context'

const LibraryHome = () => {
  return ( <div className='library-home'> </div>
  )
}
const Library = () => {
  const initChapter = { "name": "", "content": "" }
  const initBook = { "name": "init", "chapters":[initChapter] }

  //State hooks
  const [currentBook, setCurrentBook] = useState(undefined)
  const [currentChapter, setCurrentChapter] = useState(initChapter);
  const [books, setBooks] = useState([initBook])

  const params = useParams()
  //Initialize books
  useEffect(() => {
    document.title = "Library"
    booksService
      .getAll()
      .then(initialBooks => { 
        setBooks(initialBooks) 
        if (params.book !== undefined){
          const newBook = (initialBooks.find(book => book.name === params.book))
          newBook.chapters.sort((a,b) => {
            if (a.name < b.name)  return -1
            return 1;
          })
          setCurrentBook(newBook)
          setCurrentChapter(newBook.chapters[0])
        }
      })
  }, [params])

  //Event handlers
  const handleSave = (chapter) => {
    booksService
      .update(chapter.id, chapter.content , chapter.name)
      .then(() => {
          const newChapter ={id: chapter.id, name: chapter.name, content: chapter.content}
          const newBooks = books.map(book => {
            if(book.id === chapter.bookid){
              book.chapters.map(c => {
                  if(c.id === chapter.id){
                    return newChapter;
                  }
                  return c;
                }
              )
            }
            return book;
          });
        setBooks(newBooks);
        const newBook = (newBooks.find(book => book.id === currentBook.id))
        setCurrentBook(newBook)
        setCurrentChapter(newBook.chapters[0])
      })
  }
  const addChapter = () => {
    const name = prompt("Chapter name:", "...")
    if(name){
      chapterService
        .create(currentBook.id, name)
        .then((response) => {
          const newChapter ={id: response.id, name: name}
          const newBooks = books.map(book => {
            if(book.id === currentBook.id){
              book.chapters.push(newChapter);
              return book;
            }
            return book;
          });
          setBooks(newBooks)
      })
    }
  }
  const addBook = () => {
    const name = prompt("Bookname:", "...")
    if(name){
      booksService
        .create(name)
        .then((response) => {
          const newBooks = books.map(book => { return book; });
          const newBook = {id: response.id, name: name, chapters:[]};
          newBooks.push(newBook);
          setBooks(newBooks)
        })
    }
  }
  return (
    <div className="LibraryApp">
      <BookSelector books={books} addBook={addBook} />
      {params.book === undefined ?
      <LibraryHome /> :
      <bookContext.Provider value={{ handleSave}}>
        <Book
          currentBook={currentBook}
          currentChapter={currentChapter}
          addChapter={addChapter}
          setCurrentChapter={setCurrentChapter}
          handleSave={handleSave}
        /> 
      </bookContext.Provider >
      }
    </div>
  )

}
export default Library
