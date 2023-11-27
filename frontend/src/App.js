import './index.css'
import { BrowserRouter as Router,Routes,BrowserRouter,Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import booksService from './services/books'
import NavigationBar from './components/NavigationBar'
import Page from './components/Page'
import Home from './components/Home'

const App = () => {
  //State hooks
  const [currentPage, setCurrentPage] = useState("home");
  const [currentBook, setCurrentBook] = useState({name: "home",pages: []})
  const [books, setBooks] = useState([])

  //Initialize books
  useEffect(() => {
    booksService
      .getAll()
      .then(kirjat => { setBooks(kirjat) })
  }, [])
  //Event handlers
  const handleSave = (id) => { 
    booksService
      .update(id, currentPage.content)
      .then(console.log("juu"))
  }
  const handlePage = (page) => { setCurrentPage(page) }
  const handleBookChange = (book) => {
    setCurrentBook(book)
    const frontpage = book.pages.find(page => page.frontpage === true)
    setCurrentPage(frontpage)
  }
  const handleUpdate = (id, content) => {
    const newPage = currentBook.pages.find(page => page.id === id)
    newPage.content=content
    setCurrentPage(newPage)
  }
  const handleAddBook = () => {
    const name = prompt("Bookname:", "...")
    if(name){
      booksService
        .createBook(name)
        .then((response) => {
          setBooks(response)
        })
    }
  }
  const handleAddPage = () => {
    console.log("Page added")
    const name = prompt("Page name:", "...")
    if(name){
      booksService
        .createPage(currentBook.id, name)
        .then((response) => {
          setBooks(response)
        })
    }
  }
  const setCurrentBookByName = (name) => {
    setCurrentBook(books.find(book => book.name === name)) 
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar 
          currentBook={currentBook} 
          handleBookChange={handleBookChange} 
          books={books} 
          handleAddBook={handleAddBook}
        />
          <Routes>
            <Route 
              key="/"
              exact path="/"
              element={<Home />}
            />
            {/* Main routes */}
              <Route 
                path=":book"
                //onEnter={console.log("Terve")} 
                element={
                  <Page 
                    handlePageChange={handlePage}
                    handleUpdate={handleUpdate}
                    handleSave={handleSave}
                    handleAddPage={handleAddPage}
                    currentPage={currentPage}
                    currentBook={currentBook} 
                    handleBookChange={handleBookChange} 
                    books={books} 
                    handleAddBook={handleAddBook}
                    setCurrentBookByName={setCurrentBookByName}
                  />
                }
              />
            {/* Sub routes  */}
                <Route 
                  path=":book/:page"
                  element={
                    <Page 
                      handlePageChange={handlePage}
                      handleUpdate={handleUpdate}
                      handleSave={handleSave}
                      currentPage={currentPage}
                      handleAddPage={handleAddPage}
                    />
                  } 
                /> 
              )
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
