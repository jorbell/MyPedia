import ButtonRow from "./ButtonRow"
import React, {useState, useContext} from 'react'
import { bookContext } from '../../Context'

const EditorMenu = ({editor, toggleEdit, chapter }) => {
  const [chapterNameInput, setChapterNameInput] = useState(chapter.name)
  const [bookNameInput, setBookNameInput] = useState()
  const [menuIsHidden, setMenuIsHidden] = useState(false)
  const handleChapterNameInput = (event) => {setChapterNameInput(event.target.value)}
  const handleBookNameInput = (event) => {setBookNameInput(event.target.value)}

  const {handleSave, handleDeleteChapter} = useContext(bookContext);

  if(!editor) { return null }

  return (
    <div className="editor-menu">
      <div className={menuIsHidden ? "hidden" : ""} >
      Book: <input id="bookNameInput" onChange={handleBookNameInput} value={bookNameInput}/> 
        <br /> 
      Chapter: <input id="chapterNameInput" onChange={handleChapterNameInput} value={chapterNameInput}/> 
        <br /> 
      <button onClick={()=>handleSave({
          ...chapter, 
          name:chapterNameInput,
          content:editor.getHTML()
        })}> 
        Save
      </button>
      <button onClick={()=>toggleEdit()}>
        Edit
      </button>
      <button onClick={() => handleDeleteChapter(chapter.id)}> 
        Delete
      </button>
      <br /> 
      <br /> 
      </div>
      <ButtonRow editor={editor} 
        isHidden={menuIsHidden} 
        setIsHidden={setMenuIsHidden}
      />
    </div>
  )
}
export default EditorMenu
