import {useEffect, useState} from "react"
const useSelect = (onChange, defaultValue, options, extraStyle) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  },[defaultValue, setValue])
  
  const handleOnChange = (event) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return {
    onChange: handleOnChange,
    value,
    options,
    extraStyle
  }
}
export default useSelect
