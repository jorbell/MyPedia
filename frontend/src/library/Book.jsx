import TextEditor from '../editor/TextEditor';
import ChapterMenu from './ChapterMenu';

// Accept handleSave in props
const Book = ({ addChapter, currentBook, currentChapter, setCurrentChapter, handleSave }) => {
  const style = {
    display: 'flex',
    height: 'calc(100vh - 48px - 48px)'
  };

  if (!currentBook || !currentChapter) {
    return null; // Or a loading/empty state
  }

  return (
    <div className="book-view" style={style}>
      <ChapterMenu 
        chapters={currentBook.chapters}
        currentChapter={currentChapter}
        setCurrentChapter={setCurrentChapter}
        addChapter={addChapter}
      />
      {currentChapter && (
        <TextEditor 
          key={currentChapter.id} // Use a stable key like id
          chapter={currentChapter}
          handleSave={handleSave} // Pass it down to the editor
        />
      )}
    </div>
  );
};

export default Book;
