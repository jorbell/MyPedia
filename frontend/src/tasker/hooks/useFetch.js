import { useEffect, useState } from 'react'
import projectService from '../services/project'


const useFetch = () => {
  const useFetchProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
      projectService
        .getAll()
        .then(result => {
          setProjects(result)
        })
    }, [])
    return projects
  }
  const useFetchSingleProject = (id) => {
    const [project, setProject] = useState([])
    useEffect(() => {
      projectService
        .getById(id)
        .then(result => {
          setProject(result)
        })
    }, [id])
    return project
  }
  const useFetchSprints = (id) => {
    const [sprints, setSprints] = useState([])
    useEffect(() => {
        projectService
          .getSprints(id)
          .then(result => {
            setSprints(result)
          })
    }, [id])
    return sprints
  }
  const useFetchTasks = (id) => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        projectService
          .getTasks(id)
          .then(result => {
            setTasks(result)
          })
    }, [id])
    return tasks;
  }
  return {
    getTasks: useFetchTasks, 
    getSprints: useFetchSprints, 
    getProjectById: useFetchSingleProject, 
    getProjects: useFetchProjects
  }
}

export default useFetch

