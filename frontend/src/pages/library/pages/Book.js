import TextEditor from '../components/editor/TextEditor'
import ChapterMenu from '../components/ChapterMenu'
import '../styles/Book.css'

const Book = ({ addChapter, currentBook, currentChapter, setCurrentChapter, }) => {
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
        />
      </div>
    )
  }
}
export default Book
