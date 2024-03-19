
import React, {useContext, useState } from 'react'
import { projectContext } from '../Context'

const Project = ({project}) => {
  const {setCurrentProject} = useContext(projectContext);
  return(
    <div className="projectcard" onClick={() => setCurrentProject(project)}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}
const ProjectFeed = ({projects}) => {
  if (projects === undefined) return null;
  return (
    <div className="projectfeed" >
    {projects.map(project => {
      return (
        <Project key={project.id} project={project} />
      )
    }) }
    </div>
        )
}
export default ProjectFeed
