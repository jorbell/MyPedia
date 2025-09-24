import TextEditor from '../components/editor/TextEditor'
import ChapterMenu from '../components/ChapterMenu'

const Book = ({ addChapter, currentBook, currentChapter, setCurrentChapter, }) => {
  const handleEdit = (id, content) => {
    const newChapter = currentBook.chapters.find(chapter => chapter.id === id)
    newChapter.content=content
    setCurrentChapter(newChapter)
  }
  const style = {
    display: 'flex',
    height: 'calc(100vh - 48px - 48px)'
  }

  if(currentBook !== undefined){
    return (
      <div className="book-view" style={style}>
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
