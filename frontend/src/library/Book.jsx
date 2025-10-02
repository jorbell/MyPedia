import TextEditor from '../editor/TextEditor';
import ChapterMenu from './ChapterMenu';
import { useEffect, useState} from 'react'
import {useAddChapter} from '../hooks/useApi'
import {useUpdateChapter} from '../hooks/useApi'
import Notification from '../components/Notification'
import '../styles/BookSelector.css'

const Book = ({currentBook}) => {

  if (!currentBook ) {
    return null; // Or a loading/empty state
  }

  const [currentChapter, setCurrentChapter] = useState(currentBook.chapters[0]);
  const [notification, setNotification] = useState(false);
  const addChapterMutation = useAddChapter(setNotification);

  const updateChapterMutation = useUpdateChapter(setNotification);
  const handleSave = (chapter) => { 
    updateChapterMutation.mutate(chapter); 
  };

  const handleAddChapter = (name) => {
    addChapterMutation.mutate({bookId: currentBook.id, name});
  };

  return (
    <div className="book-container">
      <Notification  notification={notification} />
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
