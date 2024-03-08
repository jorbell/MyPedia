import {useState} from 'react'
const Chapter = ({isActive, name, onClick}) => {
  return(
    <button className={isActive ? "active" :"inactive"}
      onClick={onClick} >
      <p>{name}</p>
    </button>
  )
}
const ChapterMenu = ({chapters, currentChapter, setCurrentChapter,addChapter}) => {
  /* Sort chapters alpabetically */
  chapters.sort((a,b) => {
    if (a.name < b.name)  return -1
    else if (a.name > b.name)  return 1
    else return 0
  })
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className={isHidden ? "chapter-menu" : "chapter-menu minimized"}>
      <div>
      {chapters.map(chapter => 
        <Chapter
          key={chapter.name}
          name={chapter.name}
          isActive={currentChapter.id === chapter.id} 
          onClick={() => setCurrentChapter(chapter)}
        />
      )}
    </div>
      <div className="chapter-tools">
      <p 
        className="addChapter" 
        onClick={addChapter}
      > 
        +
      </p>
    <br />
        <p className="hideChapters" onClick={() => setIsHidden(!isHidden)}> = </p>
      </div>
    </div>
  )
}
export default ChapterMenu;
