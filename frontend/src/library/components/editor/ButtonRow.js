import React, {useState} from 'react'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        Ins
      </button>
      {/*
      <button onClick={() => editor.chain().focus().addColumnBefore().run()} disabled={!editor.can().addColumnBefore()}>
        addColumnBefore
      </button>
      */}
      <button onClick={() => editor.chain().focus().addColumnAfter().run()} disabled={!editor.can().addColumnAfter()}>
        Add C
      </button>
      <button onClick={() => editor.chain().focus().deleteColumn().run()} disabled={!editor.can().deleteColumn()}>
        Del C
      </button>
    {/*
      <button onClick={() => editor.chain().focus().addRowBefore().run()} disabled={!editor.can().addRowBefore()}>
        addRowBefore
      </button>
      */}
      <button onClick={() => editor.chain().focus().addRowAfter().run()} disabled={!editor.can().addRowAfter()}>
        Add R
      </button>
      <button onClick={() => editor.chain().focus().deleteRow().run()} disabled={!editor.can().deleteRow()}>
        Del R
      </button>
      <button onClick={() => editor.chain().focus().deleteTable().run()} disabled={!editor.can().deleteTable()}>
        Del T
      </button>
      <button onClick={() => editor.chain().focus().mergeCells().run()} disabled={!editor.can().mergeCells()}>
        Merg C
      </button>
      <button onClick={() => editor.chain().focus().splitCell().run()} disabled={!editor.can().splitCell()}>
        Split C
      </button>
      <button onClick={() => editor.chain().focus().toggleHeaderColumn().run()} disabled={!editor.can().toggleHeaderColumn()}>
        Tgl H
      </button>
      <button onClick={() => editor.chain().focus().toggleHeaderRow().run()} disabled={!editor.can().toggleHeaderRow()}>
        Tgl HR
      </button>
      <button onClick={() => editor.chain().focus().toggleHeaderCell().run()} disabled={!editor.can().toggleHeaderCell()}>
        Tgl HC
      </button>
      <button onClick={() => editor.chain().focus().mergeOrSplit().run()} disabled={!editor.can().mergeOrSplit()}>
        M or S
      </button>
      <button onClick={() => editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()} disabled={!editor.can().setCellAttribute('backgroundColor', '#FAF594')}>
        Set CA
      </button>
      <button onClick={() => editor.chain().focus().fixTables().run()} disabled={!editor.can().fixTables()}>
        Fix T
      </button>
    {/*
      <button onClick={() => editor.chain().focus().goToNextCell().run()} disabled={!editor.can().goToNextCell()}>
        goToNextCell
      </button>
      <button onClick={() => editor.chain().focus().goToPreviousCell().run()} disabled={!editor.can().goToPreviousCell()}>
        goToPreviousCell
      </button>
      */}
    </>
  )
}


const ButtonRow = ({editor, isHidden, setIsHidden}) => {
  return (
    <>
    Text:
    <br />
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        Para
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        UL
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        OL
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        C/
      </button>
    <button onClick={() => setIsHidden(!isHidden)}>
      Hide
    </button>
    <br />
      <div className={isHidden ? "hidden" : ""}>
        Table:
        <br />
        <MenuBar editor={editor} />
      </div>
    </>
  )
}
export default ButtonRow

