import { useState, useEffect } from 'react'
import projectService from '../services/project';
const useStates = () => {
  let states = [
    {
      value: 0,
      name: "Not started"
    },
    {
      value: 1,
      name: "Started"
    },
    {
      value: 2,
      name: "Completed"
    },
  ]
  return states;
}
const useTask = (task) => {
  const states = useStates()
  const [sprints, setSprints] = useState([])
  const [thisSprint, setThisSprint] = useState([])
  useEffect(() => {
    projectService
      .getSprints(task.projectid)
      .then(result => {
        setSprints(result)
        setThisSprint(result.find(s => s.id === task.sprintid))
      })
  }, [task.projectid, task.sprintid])

  return {
    states,  sprints, thisSprint
  }

}
export default useTask
