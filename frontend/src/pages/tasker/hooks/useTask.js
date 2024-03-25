import {useEffect, useState} from "react"
const useSelect = (onChange, defaultValue, options) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  },[defaultValue, setValue])
  
  const handleOnChange = (event) => {
    setValue(event.target.value)
    onChange(event)
  }

  return {
    onChange: handleOnChange,
    value,
    options
  }

}
const useTask = (task, sprints, updateTask, states) => {
  let sprintValues = sprints.map(s => ({ id:s.id, name:s.title }))

  const updateState = (event) => {
    updateTask({...task, state:event.target.value})
  }
  const updateSprint = (event) => {
    let id = event.target.value;
    if (id === "bl") id = null
    else id = parseInt(id)

    updateTask({...task, sprintid:id})
  }

  const sprintSelect = useSelect(updateSprint, task.sprintid === null ? "bl" : task.sprintid, sprintValues)
  const stateSelect = useSelect(updateState, task.state, states)

  return {
    sprintSelect, stateSelect
  }

}
export default useTask
