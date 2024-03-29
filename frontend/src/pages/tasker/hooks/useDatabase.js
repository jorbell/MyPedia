import taskService from '../services/task'
import sprintService from '../services/sprint'

const useDatabase = () => {
  const createTask = ( task, render ) => {
    const newTask = {
      ...task,
      sprintid: null, 
      state: 0
    }
    taskService
      .create(newTask)
      .then(result => {
        render(result)
      })
  }
  const updateSprint = (sprint, render) => {
    sprintService
      .update(sprint)
      .then(result => {
        render(sprint)
      })

  }
  const updateTask = (task, render) => {
    taskService
      .update(task)
      .then(result => { 
        render(task)
      })
  }
  const createSprint = (sprint, render) => {
    sprintService
      .create(sprint)
      .then(result => {
        render(result)
      })

  }
  const deleteTask = (task, render) => {
    taskService
      .remove(task)
      .then(result => {
        render(task)
      })
  }
  const deleteSprint = (sprint, render) => {
    sprintService
      .remove(sprint)
      .then(result => {
        render(sprint)
      })
  }
  return {createTask, updateTask,createSprint, updateSprint, deleteTask, deleteSprint}

}
export default useDatabase;
