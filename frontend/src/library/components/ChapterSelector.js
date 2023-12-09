const Chapter = ({isActive, name, onClick}) => {
  return(
    <button className={"chapter-menu-button " + 
        (isActive ? "active" :"inactive")}
      onClick={onClick} >
      <p>{name}</p>
    </button>
  )
}
const ChapterSelector = ({chapters, currentChapter, setCurrentChapter,addChapter}) => {
  /* Sort chapters alpabetically */
  chapters.sort((a,b) => {
    if (a.name < b.name)  return -1
    else if (a.name > b.name)  return 1
    else return 0
  })
  return (
    <div className="chapter-menu">
      {chapters.map(chapter => 
        <Chapter
          key={chapter.name}
          name={chapter.name}
          isActive={currentChapter.id === chapter.id} 
          onClick={() => setCurrentChapter(chapter)}
        />
      )}
      <button className="chapter-menu-button" onClick={addChapter}>Add chapter </button>
    </div>
  )
}
export default ChapterSelector;
