import useSelect from "./useSelect"
const useTask = (task, sprints, updateTask, states) => {
  let sprintValues = sprints.map(s => ({ id:s.id, name:s.title }))

  const updateState = (id) => {
    updateTask({...task, state:id})
  }
  const updateSprint = (id) => {
    if (id === "bl") id = null
    else id = parseInt(id)
    updateTask({...task, sprintid: id})
  }
  const sprintSelect = useSelect(updateSprint, task.sprintid === null ? "bl" : task.sprintid, sprintValues)
  const stateSelect = useSelect(updateState, task.state, states)

  return {
    sprintSelect, stateSelect
  }

}
export default useTask
