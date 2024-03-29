import {useEffect, useState} from "react"
import useField from "./useField"

const useEditTask = (updateTask) => {
  const title = useField('text')
  const description = useField('textarea')
  const [task, setTask] = useState()

  const handleTask = (task) => {
    setTask(task)
    title.changevalue(task.title)
    description.changevalue(task.description)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    updateTask({
      ...task,
      title: title.field.value,
      description: description.field.value,
    })
    title.clear()
    description.clear()
  }
  return {
    title,
    description,
    handleTask,
    onSubmit
  }
}
export default useEditTask
