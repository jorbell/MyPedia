const ChapterMenu = ({chapters, currentChapter, setCurrentChapter,addChapter}) => {
  /* Sort chapters alpabetically */
  chapters.sort((a,b) => {
    if (a.name < b.name)  return -1
    else if (a.name > b.name)  return 1
    else return 0
  })
  return (
    <div className="chapter-menu">
      {chapters.map(chapter => 
        <div key={chapter.name}
            className={"chapter-menu-button " + 
            (currentChapter.name === chapter.name ? "active" :"inactive")}
            onClick={() => setCurrentChapter(chapter)}
         >
          <p>{chapter.name}</p>
        </div>
      )}
      <button className="chapter-menu-button" onClick={addChapter}>Add chapter </button>
    </div>
  )
}
export default ChapterMenu;
