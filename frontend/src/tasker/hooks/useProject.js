import {useEffect, useState} from 'react';
import useFetch from './useFetch';
import useTaskFeed from '../hooks/useTaskFeed';
import sprintService from '../services/sprint'
import taskService from '../services/task'
import useForm from './useForm';


const useProject = (id) => {
  //Import data fetching hooks
  const {getProjectById, getTasks, getSprints} = useFetch()
  
  //Initialise project, tasks and sprints
  const initialProject = getProjectById(id)
  const initialSprints = getSprints(id)
  const initialTasks = getTasks(id)

  //Declare state hooks for project, sprints and tasks
  const [project, setProject] = useState([])
  const [sprints, setSprints] = useState([])
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    setProject(initialProject)
    setSprints(initialSprints)
    setTasks(initialTasks)
  }, [initialProject, initialSprints, initialTasks])

  const createSprint = (title, description) => {
    const newSprint = {
      title: title, 
      description: description,
      id: null,
      projectid:id,
    }
    sprintService
      .create(newSprint)
      .then(result => {
        setSprints([...sprints, result])
      })
  }
  const createTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      sprintid: null, 
      projectid: id
    }
    taskService
      .create(newTask)
      .then(result => {
        const newTasks = [...tasks, result]
        setTasks(newTasks)
        setSprints(sprints)
      })
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
      })
  }

  const taskfeed = useTaskFeed(id, tasks, sprints, updateTask)
  const sprintForm = useForm("Create sprint: ", "taskform", createSprint)
  const taskForm = useForm("Create task: ", "taskform", createTask)

  return {project, taskfeed, sprintForm, taskForm}
}
export default useProject;
