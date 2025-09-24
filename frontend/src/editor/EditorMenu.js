import ButtonRow from "./ButtonRow"
import React, {useState, useContext} from 'react'
import { bookContext } from '../Context'
import useField from "../hooks/useField"


const Header = ({chapterInput}) => {
  const style = {
    backgroundColor: '#00000000',
    border:'none',
    color:'white',
    fontSize:40,
    fontFamily: '"Times New Roman", Times, serif',
    textAlign: 'center',
    width: '100%',
    padding: 0
  }
  return (
        <div>
          <div style={{width:'100%', textAlign:'center'}}>
            <input style={style} {...chapterInput.field}/> 
          </div>
          <div>
        </div>
      </div>
    )
}

const EditorMenu = ({editor, chapter }) => {
  const [menuIsHidden, setMenuIsHidden] = useState(false)
  const {handleSave} = useContext(bookContext);
  const chapterInput = useField('text', chapter.name )

  console.log(chapter)
  if(!editor) { return null }
  return (
    <div className="editor-menu">
    <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', width:'100%', backgroundColor:"#ffffff55"}}>
        <ButtonRow editor={editor} 
          isHidden={menuIsHidden} 
          setIsHidden={setMenuIsHidden}
        />
        <button type="button" onKeyDown={()=>{}} onClick={()=>handleSave({
          ...chapter, 
          name:chapterInput.field.value,
          content:editor.getHTML()
        })}> 
        Save
        </button>
      </div>
    <Header chapterInput={chapterInput}/>
    </div>
  )
}
export default EditorMenu
