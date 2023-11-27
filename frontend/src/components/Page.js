import TextEditor from './Editor'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const SidePanel = ({book, handlePageChange, currentPage, handleAddPage}) => {
  let pages = book.pages
  pages.sort((a,b) => {
    if (a.name < b.name)  return -1
    else if (a.name > b.name)  return 1
    else return 0
  })
  pages.sort((a,b) => {
    if (a.frontpage > b.frontpage) return -1
    else if (a.frontpage < b.frontpage) return 1
    else return 0
  })

  return (
    <div className="sidePanel">
      {pages.map((page, i) => 
        <div key={'/'+book.name+'/'+page.name}>
          <button href={'/'+book.name+'/'+page.name}
            onClick={() => handlePageChange(page)}  
            className={currentPage.name === page.name ? "sidePanelButtonActive" : "sidePanelButton"}
          >
            {i+1} {page.name}
          </button>
          <br />
        </div>
      )}
      <button className="sidePanelButton" onClick={handleAddPage}>Add page </button>
    </div>
  )
}
const Content = ({page, handleUpdate,handleSave}) => {
  return (
    <div className="content">
      <button onClick={()=>handleSave(page.id)}>save</button>
      <TextEditor key={page.name} page={page} handleUpdate={handleUpdate}/>
    </div>
  )
}
const Page = ({handlePageChange, handleUpdate, handleSave, 
  currentPage, handleAddPage, setCurrentBookByName, currentBook}) => {
  const book = useParams()
  useEffect(() => {
    setCurrentBookByName(book.book)
  })
  if(currentBook){
    console.log(currentBook)
    return (
      <div>
          <SidePanel 
            book={currentBook}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            handleAddPage={handleAddPage}
          />
          <Content page={currentPage} book={currentBook} handleUpdate={handleUpdate} handleSave={handleSave}/>
      </div>
    )
  }
}
export default Page
