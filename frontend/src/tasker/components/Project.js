import Settings from './Settings'
import TaskFeed from './TaskFeed'

const Project = ({projects, filter, setFilter, setProjects, project}) => {
  return ( 
    <>
      <h1> {project.title }</h1>
      <p> {project.description }</p>
      <Settings 
        projects={projects}
        setFilter={setFilter}
      />
      <TaskFeed 
        projects={projects} 
        filter={filter}
        setProjects={setProjects}
      />
    </>
  )
}
export default Project;
