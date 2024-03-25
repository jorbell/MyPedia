import ButtonRow from "./ButtonRow"
import React, {useState, useContext} from 'react'
import { bookContext } from '../../Context'
import useField from "../../hooks/useField"

const EditorMenu = ({editor, chapter }) => {
  const [menuIsHidden, setMenuIsHidden] = useState(false)
  const {handleSave, handleDeleteChapter} = useContext(bookContext);
  const chapterInput = useField('text', chapter.name )

  if(!editor) { return null }
  return (
    <div className="editor-menu">
      Chapter: <input {...chapterInput.field}/> 
      <button onClick={()=>handleSave({
        ...chapter, 
        name:chapterInput.field.value,
        content:editor.getHTML()
      })}> 
      Save
      </button>
    {/*
      <button onClick={() => handleDeleteChapter(chapter.id)}> 
        Delete
      </button>
    */}
      <br /> 
      <ButtonRow editor={editor} 
        isHidden={menuIsHidden} 
        setIsHidden={setMenuIsHidden}
      />
    </div>
  )
}
export default EditorMenu
