import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Book from '../library/Book'
import BookSelector from '../library/BookSelector'

import {useBooks, useAddBook, useAddChapter, useUpdateChapter} from '../hooks/useApi'

const LibraryHome = () => { return ( <div className='library-home'> </div>) }

const Library = () => {

  //Getting the books from server.
  const {data: books = [], isLoading } = useBooks();

  //Setting the current book by the name in URL.
  const {book: bookName } = useParams();
  const currentBook = books.find(b => b.name === bookName);

  //Setting the current chapter
  const [currentChapter, setCurrentChapter] = useState(null);

  useEffect(() => {
    if (currentBook) {
      document.title = currentBook.name;
      if (currentBook.chapters && currentBook.chapters.length > 0) {
        const sortedChapters = 
          [...currentBook.chapters]
          .sort((a, b) => a.name.localeCompare(b.name));

        setCurrentChapter(sortedChapters[0]);
      } else {
        setCurrentChapter(null);
      }
    } else {
      document.title = "Library";
    }
  }, [currentBook]);

  const addBookMutation = useAddBook();
  const addChapterMutation = useAddChapter();
  const updateChapterMutation = useUpdateChapter();

  const handleAddBook = () => {
    const name = prompt("Book name:", "...");
    if (name) {
      addBookMutation.mutate(name);
    }
  };

  const handleAddChapter = () => {
    const name = prompt("Chapter name:", "...");
    if (name && currentBook) {
      addChapterMutation.mutate({ bookId: currentBook.id, name });
    }
  };

  const handleSave = (chapter) => {
    updateChapterMutation.mutate(chapter);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="LibraryApp">
      <BookSelector books={books} addBook={handleAddBook} />
      {currentBook ? (
        <Book
          currentBook={currentBook}
          currentChapter={currentChapter}
          addChapter={handleAddChapter}
          setCurrentChapter={setCurrentChapter}
          handleSave={handleSave} // Pass handleSave as a prop
        />
      ) : (
        <LibraryHome />
      )}
    </div>
  );
};

export default Library;
