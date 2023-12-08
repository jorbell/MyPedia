import ButtonRow from "./ButtonRow"
import React, {useState} from 'react'

const EditorMenu = ({editor, toggleEdit, handleSave,chapter}) => {
  const [chapterNameInput, setChapterNameInput] = useState(chapter.name)
  const [bookNameInput, setBookNameInput] = useState()
  const handleChapterNameInput = (event) => {setChapterNameInput(event.target.value)}
  const handleBookNameInput = (event) => {setBookNameInput(event.target.value)}

  if(!editor) { return null }

  return (
    <div className="editor-menu">
      Book: <input id="bookNameInput" onChange={handleBookNameInput} value={bookNameInput}/> 
        <br /> 
      Chapter: <input id="chapterNameInput" onChange={handleChapterNameInput} value={chapterNameInput}/> 
        <br /> 
      <button onClick={ ()=>handleSave(
        {...chapter, 
          name:chapterNameInput,
          content:editor.getHTML()
        }
      )}> 
        Save
      </button>
      <button onClick={()=>toggleEdit()}>
        Edit
      </button>
      <button> 
        Delete
      </button>
      <br /> 
      <br /> 
      <ButtonRow editor={editor} />
    </div>
  )
}
export default EditorMenu
