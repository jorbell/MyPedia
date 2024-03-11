import React, { useState } from 'react'
import TaskList from './TaskList';

const Project = ({project, filter, setProjects}) => {
  const [isHidden, setIsHidden] = useState(true)
  let shownTasks = project.tasks;
  if(filter === "notstarted") {
    shownTasks = project.tasks.filter(task => task.state === "0")
  }
  else if(filter === "started") {
    shownTasks = project.tasks.filter(task => task.state === "1")
  }
  else if(filter === "completed") {
    shownTasks = project.tasks.filter(task => task.state === "2")
  }
  //console.log(isHidden);
  return(
    <div>
      <div className="titlediv" onClick={() => setIsHidden(!isHidden)} >
        <h1>{project.title}</h1>
      </div>
      {isHidden ?
        <TaskList 
          tasks={shownTasks} 
          setProjects={setProjects}
        />
      : null}
    </div>
  )
}
const ProjectList = ({projects, filter, setProjects}) => {
  if (projects === undefined) return null;
  return (
    <>
      {projects.map(project => {
        return (
          <div className="projectlist" key={`project${project.id}`}>
            <Project 
              project={project} 
              filter={filter}
              setProjects={setProjects}
            />
          </div>
        )
      })}
    </>
  )
}
export default ProjectList
