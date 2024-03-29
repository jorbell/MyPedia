const TableButtons = ({ editor }) => {
  return (
    <div>
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
    </div>
  )
}
export default TableButtons
