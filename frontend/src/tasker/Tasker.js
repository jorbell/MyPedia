import React, {useEffect, useState} from 'react'
import projectService from './services/project'
import taskService from './services/task'
import './style.css'
import ProjectList from './components/ProjectList'
import Settings from './components/Settings'

import { projectContext } from './Context'

const Header = () => <h1> Tasker </h1>
const Tasker = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState("notstarted")

  //Get a list of projects
  useEffect(() => {
    document.title = "Tasker"
    projectService
      .getAll()
      .then(result => {
        //console.log(result)
        setProjects(result);
      })
  }, [])

  const createProject = (title, description) => {
    let project = {title: title, description: description}
    projectService
      .create(project)
      .then(result => {
        setProjects(result)
        console.log(result)
      })
  }
  const createTask = (task) => {
    console.log(task)
    task = {
      ...task,
      state: 0
    }
    taskService
      .create(task)
      .then(result => {
        setProjects(result)
      })
  }
  return (
    <div className="tasker">
      <Header />
      <projectContext.Provider value={{createTask, createProject}}>
        <Settings 
          projects={projects}
          setFilter={setFilter}
        />
        <ProjectList 
          projects={projects} 
          filter={filter}
          setProjects={setProjects}
        />
      </projectContext.Provider>

    </div>
  )
}
export default Tasker;
