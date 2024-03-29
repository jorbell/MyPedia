import {useState} from "react"
import TableButtons from "./TableButtons"
import TextButtons from "./TextButtons"
import useSelect from "../../../tasker/hooks/useSelect"
import Select from "../../../tasker/components/ui/Select"


const ButtonRow = ({editor, isHidden, setIsHidden}) => {
  const [tool, setTool] = useState("text")
  const tools = [
    {
      id: "text",
      name: "Text",
    },
    {
      id: "table",
      name: "Table",
    }
  ]
  const extraStyle = { color: 'white', fontSize:18 }
  const toolSelect = useSelect(setTool, 0, tools, extraStyle)
  return (
    <div style={{display:'flex', flexDirection: 'row', width:'100%'}}>
      <Select {...toolSelect} />
        {tool === "text" ?
          <TextButtons editor={editor} /> 
          :
          <TableButtons editor={editor} />
          }
    </div>
  )
}
export default ButtonRow

