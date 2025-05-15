import {useState} from "react"

const useField = (type, initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  const clear = () => {
    setValue('')
  }
  return {
    field: { type, value, onChange },
    clear
  }
}
export default useField

