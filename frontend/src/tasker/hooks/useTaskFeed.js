import {useEffect, useState} from "react"
import useFetch from "./useFetch"
import taskService from '../services/task'
import sprintService from '../services/sprint'

const useTaskFeed = (projectid) => {

  const { getSprints, getTasks } = useFetch()

  let initialSprints = getSprints(projectid)
  let initialTasks = getTasks(projectid)

  const [sprints, setSprints] = useState(initialSprints)
  const [tasks, setTasks] = useState(initialTasks)
  const [backlog, setBacklog] = useState([])

  useEffect(() => {
    setTasks(initialTasks)
    setBacklog(initialTasks.filter(t => t.sprintid === 0))
    let newSprints = initialSprints.map(s => (
      { ...s, tasks: initialTasks.filter(t => t.sprintid === s.id) }
    ))
    setSprints(newSprints)
  }, [initialSprints, initialTasks, setTasks, setSprints])

  const handleSetSprints = (sprints, tasks) => {
    let newSprints = sprints.map(s => (
      { ...s, tasks: tasks.filter(t => t.sprintid === s.id) }
    ))
    setSprints(newSprints)
  }
  const updateTask = (task) => {
    taskService
      .update(task)
      .then(result => { 
        const newTasks = tasks.map(t => {
          if(t.id === task.id) return task
          else return t
        })
        setTasks(newTasks)
        const newSprints = sprints.map(s => (
          { ...s, tasks: newTasks.filter(t => t.sprintid === s.id) }
        ))
        setSprints(newSprints)
        setBacklog(newTasks.filter(t => t.sprintid === 0))
      })
  }
  const createSprint = (sprint) => {
    const newSprint = {...sprint, projectid:projectid}
    sprintService
      .create(newSprint)
      .then(result => {
        handleSetSprints([...sprints, result], tasks)
      })
  }
  const createTask = (task) => {
    const newTask = {...task, projectid: projectid}
    taskService
      .create(newTask)
      .then(result => {
        const newTasks = [...tasks, result]
        setBacklog(newTasks.filter(t => t.sprintid === 0))
        setTasks(newTasks)

        console.log(newTasks)
        console.log("task created")
        console.log(result)
      })
  }

  return {sprints, tasks, updateTask, createTask, backlog, createSprint}
}
export default useTaskFeed
