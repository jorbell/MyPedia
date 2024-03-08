import TextEditor from './editor/TextEditor'
import ChapterMenu from './ChapterMenu'

const NoBook = () => {
  return <h2>Select a book</h2>
}
const Book = ({
  handleSave, 
  addChapter,
  currentBook,
  currentChapter,
  setCurrentChapter,
  handleDeleteChapter
}) => {
  const handleEdit = (id, content) => {
    const newChapter = currentBook.chapters.find(chapter => chapter.id === id)
    newChapter.content=content
    setCurrentChapter(newChapter)
  }

  if(currentBook !== undefined){
    return (
      <div className="book-view">
        <ChapterMenu 
          chapters={currentBook.chapters}
          currentChapter={currentChapter}
          setCurrentChapter={setCurrentChapter}
          addChapter={addChapter}
        />
        <TextEditor 
          key={currentChapter.name}
          chapter={currentChapter} 
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleDeleteChapter={handleDeleteChapter}
        />
      </div>
    )
  }else return <NoBook />
}
export default Book
