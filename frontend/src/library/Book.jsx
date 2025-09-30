import TextEditor from '../editor/TextEditor';
import ChapterMenu from './ChapterMenu';
import { useState} from 'react'
import {useAddChapter} from '../hooks/useApi'
import {useUpdateChapter} from '../hooks/useApi'
import '../styles/BookSelector.css'

// Accept handleSave in props
const Book = ({currentBook}) => {

  if (!currentBook ) {
    return null; // Or a loading/empty state
  }

  const [currentChapter, setCurrentChapter] = useState(currentBook.chapters[0]);
  const addChapterMutation = useAddChapter();

  const updateChapterMutation = useUpdateChapter();
  const handleSave = (chapter) => { updateChapterMutation.mutate(chapter); };

  const handleAddChapter = (name) => {
    addChapterMutation.mutate({bookId: currentBook.id, name});
  };

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
