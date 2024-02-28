
import {Color} from '@tiptap/extension-color'
import Table from '@tiptap/extension-table'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TextStyle from '@tiptap/extension-text-style'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {useState} from 'react'
import EditorMenu from './EditorMenu'
import './editor.css'

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: element => element.getAttribute('data-background-color'),
        renderHTML: attributes => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          }
        },
      },
    }
  },
})
const TextEditor = ({chapter, handleSave, handleDeleteChapter}) => {
  const extensions = [
    Color.configure(),
    TextStyle.configure(),
    StarterKit.configure(),
    TableRow,
    TableHeader,
    CustomTableCell,
    Table.configure({
      resizable: true,
    }),
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
    <div className="Editor">
    {/*<div className="margin" />*/}
      <div>
          <EditorMenu 
            editor={editor} 
            toggleEdit={toggleEdit} 
            handleSave={handleSave} 
            handleDeleteChapter={handleDeleteChapter}
            chapter={chapter}
          />
      </div>

      <div className="editor-area">
        <EditorContent 
          className="editor-content" 
          editor={editor} 
          spellCheck="false" 
        />
      </div>
    {/*<div className="margin" />*/}
    </div>
  )
}
export default TextEditor;
