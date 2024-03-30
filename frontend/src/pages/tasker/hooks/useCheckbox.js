import { useState} from "react"
const useCheckBox = (value) => {
  const [isChecked, setIsChecked] = useState(true)
  const type = "checkbox"
  const onChange = (event) => {
    console.log(event.target.checked)
    setIsChecked(event.target.checked)
  }
  return {
    type,
    value,
    checked: isChecked,
    onChange
  }
}
export default useCheckBox
