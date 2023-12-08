
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {useState} from 'react'
import EditorMenu from './Menu'
import './editor.css'

const TextEditor = ({chapter, handleSave}) => {
  const extensions = [
    Color.configure(),
    TextStyle.configure(),
    StarterKit.configure(),
  ]
  const [editable, setEditable] = useState(true)
  const [content, setContent] = useState(chapter.content)

  const editor = useEditor({
    editable,
    extensions,
    content:content,
    onUpdate(){
      setContent(editor.getHTML())
    },
  })
  //editor.commands.updateAttributes('codeblock', {class:'esko'})
  const toggleEdit = () => { 
    setEditable(!editable) 
    editor.setEditable(!editable)
  }
  return (
    <>
      <div className="margin" />
      <div className="editor-area">
        <EditorMenu 
          editor={editor} 
          toggleEdit={toggleEdit} 
          handleSave={handleSave} 
          chapter={chapter}
        />

        <EditorContent 
          className="editor-content" 
          editor={editor} 
          spellCheck="false" 
        />
      </div>
      <div className="margin" />
    </>
  )
}
export default TextEditor;
