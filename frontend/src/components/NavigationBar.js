import { Link } from "react-router-dom"
const NavigationBar = ({handleBookChange, currentBook, books, handleAddBook}) => {
  if(currentBook){
    return (
      <div className="topnav">
        <Link className="pagelogo" to="" onClick={() => handleBookChange({name: "home", pages: []})}>MyPedia</Link>
          <div className="topnavLinks">
            {books.map(book => 
              <Link to={book.name}
                key={book.name}
                className={book.name===currentBook.name?"active":"inactive"}
                onClick={() => handleBookChange(book)} > 
                {book.name}
              </Link>
            )}
          </div>
        <button className="addBook" onClick={handleAddBook}>+</button>
      </div>
    )
  }
}
export default NavigationBar
