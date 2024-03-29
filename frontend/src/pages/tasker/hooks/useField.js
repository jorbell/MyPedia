import {useState} from "react"

const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  const clear = () => {
    setValue('')
  }
  const handleValueChange = (value) => {
    setValue(value)
  }
  return {
    field: {
      type,
      value,
      onChange,
    },
    changevalue: handleValueChange,
    clear
  }
}
export default useField
