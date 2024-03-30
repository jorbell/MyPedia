import {useEffect, useState} from "react"
import useCheckBox from "./useCheckbox"

const useFilter = () => {
  const notStarted = useCheckBox(0)
  const started = useCheckBox(1)
  const completed = useCheckBox(2)
  const [values, setValues] = useState([])
  useEffect(() => {
    const newValues = []
    if(notStarted.checked === true ) newValues.push("0")
    if(started.checked === true ) newValues.push("1")
    if(completed.checked === true ) newValues.push("2")
    setValues(newValues)
  },[setValues, started.checked, notStarted.checked, completed.checked])

  return {
    notStarted,
    started,
    completed,
    values
  }
}
export default useFilter
