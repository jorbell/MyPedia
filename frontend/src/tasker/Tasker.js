import React, {useEffect, useState} from 'react'
import ProjectFeed from './components/ProjectFeed'
import Project from './components/Project'
import projectService from './services/project'
import taskService from './services/task'
import './style.css'

import {projectContext} from './Context'

const Header = () => <h1> Tasker </h1>
const Tasker = () => {
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState(undefined)

  //Get a list of projects
  useEffect(() => {
    document.title = "Tasker"
    projectService
      .getAll()
      .then(result => {
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
    task = {
      ...task,
      state: 0,
    }
    taskService
      .create(task)
      .then(result => {
        setProjects(result)
        setCurrentProject(result.find(project => project.id === parseInt(task.projectid)))
      })
  }
  return (
    <div className="tasker">
      <projectContext.Provider value={{createTask, createProject, currentProject, setCurrentProject, setProjects}}>
        {currentProject === undefined ? 
          <>
            <Header />
            <ProjectFeed 
              projects={projects}
            />
          </>
          :
          <>
            <Project 
              project ={currentProject}
              projects={projects}
              setProjects={setProjects}
            />
          </>
        }
      </projectContext.Provider>

    </div>
  )
}
export default Tasker;
