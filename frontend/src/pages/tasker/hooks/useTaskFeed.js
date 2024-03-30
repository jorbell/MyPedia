import {useEffect, useState} from "react"
import useFetch from "./useFetch"
import useFilter from "./useFilter"

const useTaskFeed = (tasks, initialSprints, updateTask, popup) => {

  //States variables for sprints and states
  const [sprints, setSprints] = useState([])
  const [states, setStates] = useState([])

  const filter = useFilter()

  //Fetch list of possible states for task (Completed, started etc.)
  const initStates = useFetch().getTaskStates()

  //Sort tasks to sprints and attach correspondingly.
  const sortTaskFeed = (sprints, tasks) => {
    let sortedSprints = sprints.map(s => (
      { ...s, tasks: tasks.filter(t => t.sprintid === s.id) }
    ))

    //Apply filter
    sortedSprints = sortedSprints.map(s => (
      { ...s, tasks: s.tasks.filter(t => filter.values.includes(t.state)) }
    ))
    return sortedSprints
  }
  //Creates backlog "sprint" from tasks with null sprintid
  const generateBacklog = (tasks) => {
    let backlog = {
      title: "Backlog",
      description: "Tasks without sprints",
      id: 'bl',
      tasks: tasks.filter(t => t.sprintid === null)
    }
    return backlog;
  }

  useEffect(() => {
    //Sort tasks to sprints and attach correspondingly.
    const newSprints = sortTaskFeed(initialSprints, tasks)
    //Create backlog "Sprint" from tasks without sprintid
    const bl = generateBacklog(tasks)
    setStates(initStates)
    setSprints([...newSprints, bl]);
  }, [tasks, initialSprints, initStates, filter.values])



  return {sprints, updateTask, states, popup, filter}
}
export default useTaskFeed
