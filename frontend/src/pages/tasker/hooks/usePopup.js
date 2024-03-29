import { useState} from "react"

const usePopup = (sprintForm,taskForm, taskEditor, sprintEditor) => {
  const [isShown, setIsShown] = useState(false)
  const [type, setType] = useState("")

  const openSprintForm = () => {
    setType("sprintform")
    setIsShown(true)
  }
  const openTaskForm = () => {
    setType("taskform")
    setIsShown(true)
  }
  const openTask = (task) => {
    taskEditor.handleTask(task)
    setType("task")
    setIsShown(true)
  }
  const openSprintEdit = (sprint) => {
    sprintEditor.handleSprint(sprint)
    setType("sprint")
    setIsShown(true)
  }
  const close = () => {
    setIsShown(false)
  }

  return {
    isShown, 
    setIsShown, 
    type, 
    openSprintForm, 
    openTaskForm, 
    openSprintEdit,
    openTask, 
    taskForm, 
    sprintForm, 
    taskEditor,
    sprintEditor,
    close
  }
}
export default usePopup
