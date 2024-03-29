import {useEffect, useState} from "react"
import useField from "./useField"

const useEditTask = (updateTask, deleteTask) => {
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
  const handleDelete = (event) => {
    event.preventDefault()
    deleteTask(task)
  }
  return {
    title,
    description,
    handleTask,
    onSubmit,
    handleDelete
  }
}
export default useEditTask
