import {useEffect, useState} from "react"
import useFetch from "./useFetch"

const useTaskFeed = (projectid, tasks, initialSprints, updateTask) => {

  const [sprints, setSprints] = useState([])
  const [states, setStates] = useState([])
  //Fetch list of possible states for task (Completed, started etc.)
  const initStates = useFetch().getTaskStates()

  useEffect(() => {
    setSprints(initialSprints)
    setStates(initStates)

    //Sort tasks to sprints and attach correspondingly.
    let newSprints = initialSprints.map(s => (
      { ...s, tasks: tasks.filter(t => t.sprintid === s.id) }
    ))
    //Create backlog "Sprint" from tasks without sprintid
    let bl = {
      title: "Backlog",
      description: "Tasks without sprints",
      id: 'bl',
      tasks: tasks.filter(t => t.sprintid === null)
    }
    setSprints([...newSprints, bl]);
  }, [tasks, initialSprints, initStates])

  return {sprints, projectid, updateTask, states}
}
export default useTaskFeed
