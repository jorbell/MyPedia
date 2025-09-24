import TextEditor from '../components/editor/TextEditor'
import ChapterMenu from '../components/ChapterMenu'

const Book = ({ addChapter, currentBook, currentChapter, setCurrentChapter, }) => {
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
        />
      </div>
    )
  }
}
export default Book
