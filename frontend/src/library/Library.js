import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './Library.css'
import Book from './pages/Book'
import Home from './pages/Home'
import BookSelector from './components/BookSelector'
import booksService from './services/books'
import chapterService from './services/chapter'
import { bookContext } from './Context'

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
    document.title = "Library"
    booksService
      .getAll()
      .then(initialBooks => { 
        setBooks(initialBooks) 
        if (params.book !== undefined){
          let newBook = (initialBooks.find(book => book.name === params.book))
          newBook.chapters.sort((a,b) => {
            if (a.name < b.name)  return -1
            else if (a.name > b.name)  return 1
            else return 0
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
      .then( response => {
        setBooks(response)
        let newCurrentBook = response.find(book => book.id === currentBook.id)
          newCurrentBook.chapters.sort((a,b) => {
            if (a.name < b.name)  return -1
            else if (a.name > b.name)  return 1
            else return 0
          })
        setCurrentBook(newCurrentBook)
        let newChapter = newCurrentBook.chapters.find(c => c.id === chapter.id)
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
  const handleDeleteChapter = (id) => {
    chapterService
      .remove(id)
      .then( response => {
          response.chapters.sort((a,b) => {
            if (a.name < b.name)  return -1
            else if (a.name > b.name)  return 1
            else return 0
          })
        setBooks(response)
        let newCurrentBook = response.find(book => book.id === currentBook.id)
        setCurrentBook(newCurrentBook)
        let newChapter = newCurrentBook.chapters[0]
        setCurrentChapter(newChapter)
      })
  }
  const addBook = () => {
    const name = prompt("Bookname:", "...")
    if(name){
      booksService
        .create(name)
        .then((response) => {
          response.chapters.sort((a,b) => {
            if (a.name < b.name)  return -1
            else if (a.name > b.name)  return 1
            else return 0
          })
          setBooks(response)
        })
    }
  }
  return (
    <div className="LibraryApp">
      <BookSelector books={books} addBook={addBook} />
      {params.book === undefined ?
      <Home /> :
      <bookContext.Provider value={{ handleSave, handleDeleteChapter }}>
        <Book
          currentBook={currentBook}
          currentChapter={currentChapter}
          addChapter={addChapter}
          setCurrentChapter={setCurrentChapter}
          handleDeleteChapter={handleDeleteChapter}
          handleSave={handleSave}
        /> 
      </bookContext.Provider >
      }
    </div>
  )

}
export default Library
