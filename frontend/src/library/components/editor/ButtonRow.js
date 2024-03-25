import TableButtons from "./TableButtons"
import TextButtons from "./TextButtons"


const ButtonRow = ({editor, isHidden, setIsHidden}) => {
  return (
    <>
    <TextButtons editor={editor} /> <br />
    <div className={isHidden ? "hidden" : ""}>
      <TableButtons editor={editor} />
    </div>
    <br />
    <button onClick={() => setIsHidden(!isHidden)}>
      Hide
    </button>
    </>
  )
}
export default ButtonRow

