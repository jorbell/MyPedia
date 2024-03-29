import {useEffect, useState} from 'react';
import useFetch from './useFetch';
import useTaskFeed from '../hooks/useTaskFeed';
import useForm from './useForm';
import usePopup from '../hooks/usePopup';
import useDatabase from './useDatabase';
import useEditTask from './useEditTask';
import useEditSprint from './useEditSprint';

const useProject = (id) => {
  //Import data fetching hooks
  const {getProjectById, getTasks, getSprints} = useFetch()
  const db = useDatabase();
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

  const handleCreateSprint = (sprint ) => {
    setSprints([...sprints, sprint])
    popup.close()
  }
  const handleCreateTask = (task) => {
    const newTasks = [...tasks, task]
    setTasks(newTasks)
    popup.close()
  }
  const handleUpdateSprint = (sprint) => {
    const newSprints = sprints.map(s => {
      if(s.id === sprint.id) return sprint
      else return s
    })
    setSprints(newSprints)
    popup.close()
  }
  const handleUpdateTask = (task) => {
    const newTasks = tasks.map(t => {
      if(t.id === task.id) return task
      else return t
    })
    setTasks(newTasks)
    popup.close()
  }
  const handleDeleteTask = (task) => {
    const newTasks = tasks.filter(t => t.id !== task.id)
    setTasks(newTasks)
    popup.close()
  }
  const handleDeleteSprint = (sprint) => {
    const newSprints = sprints.filter(s => s.id !== sprint.id)
    setSprints(newSprints)
    popup.close()
  }

  const updateTask = (task) => { db.updateTask(task, handleUpdateTask) }
  const updateSprint = (task) => { db.updateSprint(task, handleUpdateSprint) }
  const createTask = (task) => { db.createTask({...task, projectid:id}, handleCreateTask) }
  const createSprint = (sprint) => { db.createSprint({...sprint, projectid:id}, handleCreateSprint) }
  const deleteTask = (task) => {db.deleteTask(task, handleDeleteTask)}
  const deleteSprint = (sprint) => {db.deleteSprint(sprint, handleDeleteSprint)}

  const sprintForm = useForm("Create sprint: ", "taskform", createSprint)
  const taskForm = useForm("Create task: ", "taskform", createTask)
  const taskEditor = useEditTask(updateTask, deleteTask);
  const sprintEditor = useEditSprint(updateSprint, deleteSprint)

  const popup = usePopup(sprintForm, taskForm, taskEditor, sprintEditor)


  const taskfeed = useTaskFeed(tasks, sprints, updateTask, popup)


  return {project, taskfeed, popup}
}
export default useProject;
