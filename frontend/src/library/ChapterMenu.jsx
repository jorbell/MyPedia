import { useState } from 'react'
import '../styles/ChapterMenu.css'

const ChapterTools = ({ addChapter, isHidden, setIsHidden }) => {
  return (
    <div className="chapter-tools">
      <p className="addChapter" onClick={addChapter}>
        {' '}
        +
      </p>
      <br />
      <p
        className="hideChapters"
        onKeyDown={() => {}}
        onClick={() => setIsHidden(!isHidden)}
      >
        =
      </p>
    </div>
  )
}
const ChapterMenu = ({
  chapters,
  currentChapter,
  setCurrentChapter,
  addChapter,
}) => {
  const [isHidden, setIsHidden] = useState(true)

  chapters.sort((a, b) => {
    if (a.name < b.name) return -1
    return 1
  })
  return (
    <div className={isHidden ? 'chapter-menu' : 'chapter-menu minimized'}>
      <div className={'chapter-buttons'}>
        <h1 className="chapters-title"> Chapters: </h1>
        {chapters.map((chapter) => (
          <button
            key={chapter.name}
            name={chapter.name}
            className={`chapter-button ${
              currentChapter.id === chapter.id ? 'active' : ''
            }`}
            onClick={() => setCurrentChapter(chapter)}
          >
            {chapter.name}
          </button>
        ))}
      </div>
      <ChapterTools
        addChapter={addChapter}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
    </div>
  )
}
export default ChapterMenu
