import TextEditor from '../editor/TextEditor';
import ChapterMenu from './ChapterMenu';
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useAddChapter} from '../hooks/useApi'
import {useUpdateChapter} from '../hooks/useApi'
import '../styles/BookSelector.css'

const Book = ({currentBook, setNotification}) => {

  if (!currentBook ) {
    return null; // Or a loading/empty state
  }

  //useState for current chapter
  const [currentChapter, setCurrentChapter] = useState(currentBook.chapters[0]);

  //Mutations
  const addChapterMutation = useAddChapter(setNotification);
  const updateChapterMutation = useUpdateChapter(setNotification);

  //Get the bookname from params
  const {book: bookName } = useParams();

  const handleSave = (chapter) => { 
    updateChapterMutation.mutate(chapter); 
  };

  const handleAddChapter = (name) => {
    addChapterMutation.mutate({bookId: currentBook.id, name});
  };

  useEffect(() => {
    setCurrentChapter(currentBook.chapters[0]);
    document.title = "Library";
    if (bookName) {
      document.title = bookName;
    } 
    console.log("useEffect");
  }, [bookName]);

  return (
    <div className="book-container">
      <ChapterMenu 
        chapters={currentBook.chapters}
        currentChapter={currentChapter}
        setCurrentChapter={setCurrentChapter}
        addChapter={handleAddChapter}
      />
      <TextEditor 
        key={currentChapter.id} 
        chapter={currentChapter}
        handleSave={handleSave} 
      />
    </div>
  )
};

export default Book;
